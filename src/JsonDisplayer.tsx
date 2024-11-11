export function JsonDisplayer({ json }: { json: {} }) {
  return (
    <>
      <h2 className="text-lg font-bold mb-4">JSON Data Output</h2>
      <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-hidden relative">
        <div
          className="absolute inset-0 overflow-y-scroll pr-2"
          style={{ scrollbarWidth: "none" }}
        >
          <pre className="text-gray-800 whitespace-pre-wrap">{JSON.stringify(json, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}

