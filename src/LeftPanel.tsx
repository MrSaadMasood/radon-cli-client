import { FormEvent, useState } from "react"
import FlexibleForm from "./GetForm";
import NavigationLinks from "./NavigationLinks";
import SetForm from "./SetForm";
export const LeftPanel = ({
  setKeysAdded,
  setJsonData,
  setError,
  setSuccess,
  keyRemover
}: {
  setKeysAdded: React.Dispatch<React.SetStateAction<{
    name: string;
    ttl: string | number;
  }[]>>,
  setJsonData: React.Dispatch<React.SetStateAction<{}>>,
  setError: (err: string) => void,
  setSuccess: (message: string) => void,
  keyRemover: KeyRemover
}) => {

  const BASE_URL = import.meta.env.VITE_BASE_URL || ""

  const [getKeyFrom, setGetKeyFrom] = useState("")
  const [delKeyForm, setDelKeyForm] = useState("")

  async function getit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()
      const res = await fetch(`${BASE_URL}/get/${getKeyFrom.trim()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!res.ok) throw new Error
      const body = await res.json()
      setJsonData(body)
      setSuccess("Value Obtained")
    } catch (error) {
      console.log("Get Operation Failed")
      setError("Get Key Operation Failed")
    }
  }

  async function delit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()
      const res = await fetch(`${BASE_URL}/del/${delKeyForm.trim()}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!res.ok) throw new Error
      await res.json()
      keyRemover(delKeyForm.trim())
      setSuccess("Key Deleted Successfully")
    } catch (error) {
      console.log("Get Operation Failed")
      setError("Del Key Operation Failed")
    }
  }

  return (
    <div className="bg-white w-full lg:w-1/2 rounded-lg mx-2 p-4 flex flex-col items-center space-y-6">
      <NavigationLinks ></NavigationLinks>
      {/* Forms */}
      <div className="space-y-6 w-full">
        <SetForm BASE_URL={BASE_URL} setError={setError} setKeysAdded={setKeysAdded} setSuccess={setSuccess} />
        {/* Get Key Form */}
        <FlexibleForm state={getKeyFrom} setState={setGetKeyFrom} heading="Get Key"
          onSubmit={getit} />
        {/* Delete Key Form */}
        <FlexibleForm state={delKeyForm} setState={setDelKeyForm} heading="Delete Key"
          onSubmit={delit} />
      </div>
    </div>
  )
}
