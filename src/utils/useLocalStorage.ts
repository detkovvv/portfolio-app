import { useEffect, useState } from 'react'

function getLocalStorage(key: string, defaultValue: string): string {
  // получение сохраненного значения
  const saved = localStorage.getItem(key)

  return saved ? JSON.parse(saved) : defaultValue
}

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, defaultValue)
  })

  useEffect((): void => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
