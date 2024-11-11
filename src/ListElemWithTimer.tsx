import { useEffect, useState } from "react"

export function ListElemWithTimer({ elem, keyRemover }: { elem: KeysAdded, keyRemover: KeyRemover }) {

  const [timer, setTimer] = useState(Number(elem.ttl))

  useEffect(() => {
    if (timer === 0) return
    const id = setInterval(() => setTimer((time) => {
      const currTime = time - 1
      if (currTime === 0) setTimeout(() => keyRemover(elem.name), 1000)
      return currTime
    }), 1000)
    return () => clearTimeout(id)
  }, [timer])

  return (
    <li
      key={elem.name}
      className="flex justify-between items-center bg-white px-4 py-2 rounded-lg shadow border-2 border-black"
    >
      <span>{elem.name}</span>
      <span className="text-gray-500">{timer}s</span>
    </li>

  )
}
