import { FormEvent } from "react"

function FlexibleForm({ state, setState, onSubmit, heading }: {
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>,
  onSubmit: (e: FormEvent<HTMLFormElement>) => void,
  heading: string
}) {
  return (
    <form className="space-y-4 flex flex-col"
      onSubmit={onSubmit}>
      <h2 className="text-lg font-bold">{heading}</h2>
      <div className="flex space-x-2">
        <label className="w-full">
          Key:
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-black"
            onChange={e => setState(e.target.value)}
            value={state}
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  )
}

export default FlexibleForm
