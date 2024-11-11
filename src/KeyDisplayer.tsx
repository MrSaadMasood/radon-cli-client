import { ListElemWithTimer } from "./ListElemWithTimer";

export function KeysDisplayer({ keysAdded, keyRemover }: { keysAdded: KeysAdded[], keyRemover: KeyRemover }) {

  return (
    <>
      <h2 className="text-lg font-bold mt-8 mb-4">Keys Added</h2>
      <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-hidden overflow-y-scroll relative"
        style={{ scrollbarWidth: "none" }}>
        <div
          className=""
        >
          {keysAdded.length ? (
            <ul className="text-gray-800 space-y-2 ">
              {keysAdded.map((key) => (
                <ListElemWithTimer elem={key} key={key.name} keyRemover={keyRemover} />
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No keys added yet</p>
          )}
        </div>
      </div>
    </>
  )
}
