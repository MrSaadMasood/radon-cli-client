import { JsonDisplayer } from "./JsonDisplayer"
import { KeysDisplayer } from "./KeyDisplayer"


export const RightPanel = ({ keysAdded, jsonData, keyRemover }: {
  keysAdded: KeysAdded[],
  jsonData: {},
  keyRemover: KeyRemover
}) => {

  return (
    <div className="bg-white w-full lg:w-1/2 rounded-lg mx-2 p-6">
      {/* JSON Data Output */}
      <JsonDisplayer json={jsonData} />
      {/* Keys Added with TTL */}
      <KeysDisplayer keysAdded={keysAdded} keyRemover={keyRemover} />
    </div>
  )
}


