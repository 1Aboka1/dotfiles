import { createContext } from 'react'


const handleSignClick = (type) => () => {
    setSignType(type)
    setSignWindowShown(!signWindowShown)
}
export const signWindowShown = createContext(false)
export const signType = createContext('')