import { useState } from "react"


function SetForm({ setKeysAdded, setError, BASE_URL, setSuccess }: {
  setKeysAdded: React.Dispatch<React.SetStateAction<{
    name: string;
    ttl: string | number;
  }[]>>,
  setError: (err: string) => void,
  BASE_URL: string,
  setSuccess: (message: string) => void
}) {
  const [addKeyForm, setAddKeyForm] = useState<SetKey>({
    key: "",
    value: "",
    ttl: 0
  })
  return (
    < form className="space-y-4 flex flex-col"
      onSubmit={async e => {
        try {
          e.preventDefault()
          const { key, value, ttl } = addKeyForm
          const trimmedKey = key.trim()
          const trimmedValue = value.trim()
          const reqBody: SetKey = {
            key: trimmedKey,
            value: trimmedValue,
            ttl
          }
          if (ttl && (ttl < 1 || ttl > 9999)) return setError("Time-to-live Should be Less Than 9999 seconds")
          if (!ttl) delete reqBody.ttl
          const res = await fetch(`${BASE_URL}/set`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(reqBody)
          })
          if (!res.ok) throw new Error()
          await res.json()
          if (ttl) {
            setKeysAdded((keysAdded) => {
              const isKeyPresent = keysAdded.findIndex(elem => elem.name === trimmedKey)
              if (isKeyPresent < 0) return keysAdded.concat({ name: trimmedKey, ttl: ttl })
              keysAdded[isKeyPresent].ttl = ttl
              return [...keysAdded]
            })
          }
          setSuccess("Key Added Successfully")
        } catch (error) {
          console.log("key set operation failed")
          setError("Set Key Operation Failed")
        }
      }
      }
    >
      <h2 className="text-lg font-bold">Set Key</h2>
      <div className="flex space-x-2">
        <label className="w-full">
          Key:
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
            value={addKeyForm.key}
            maxLength={500}
            onChange={e => setAddKeyForm(prev => ({
              ...prev,
              key: e.target.value
            }))}
          />
        </label>
        <label className="w-full">
          Value:
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-black"
            maxLength={5000}
            required
            value={addKeyForm.value}
            onChange={e => setAddKeyForm(prev => ({
              ...prev,
              value: e.target.value
            }))}
          />
        </label>
        <label className="w-full">
          Time-to-live:
          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={addKeyForm.ttl}
            onChange={e => setAddKeyForm(prev => ({
              ...prev,
              ttl: Number(e.target.value)
            }))}
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-800"
      >
        Submit
      </button>
    </form >
  )
}

export default SetForm  
