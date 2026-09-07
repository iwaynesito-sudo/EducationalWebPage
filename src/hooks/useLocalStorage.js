import { useState, useEffect, useCallback, useRef } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const initialValueRef = useRef(initialValue)
  initialValueRef.current = initialValue

  const readValue = useCallback(() => {
    if (typeof window === 'undefined') return initialValueRef.current
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValueRef.current
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValueRef.current
    }
  }, [key])

  const [storedValue, setStoredValue] = useState(readValue)

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
        window.dispatchEvent(new Event('storage'))
        window.dispatchEvent(new Event('lessonCompleted'))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  useEffect(() => {
    const handleChange = () => {
      setStoredValue(readValue())
    }
    window.addEventListener('storage', handleChange)
    window.addEventListener('lessonCompleted', handleChange)
    return () => {
      window.removeEventListener('storage', handleChange)
      window.removeEventListener('lessonCompleted', handleChange)
    }
  }, [readValue])

  return [storedValue, setValue]
}