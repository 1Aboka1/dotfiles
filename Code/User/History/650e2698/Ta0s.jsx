import { createContext } from 'react'


export const signWindowShownContext = createContext(null)
export const signTypeContext = createContext(null)

// const handleSignClick = (type) => () => {
//     setSignType(type)
//     setSignWindowShown(!signWindowShown)
// }