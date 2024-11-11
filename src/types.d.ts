type KeysAdded = {
  name: string, ttl: string | number
}

type SetKey = { key: string, value: string, ttl?: number }
type KeyRemover = (key: string) => void
