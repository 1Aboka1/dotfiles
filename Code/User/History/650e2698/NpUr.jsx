import { createContext } from 'react'

export const signWindowShown
const [signType, setSignType] = useState('')
const [bgDimmed, setBgDimmed] = useState(false)

const handleSignClick = (type) => () => {
    setSignType(type)
    setSignWindowShown(!signWindowShown)
}
export const SignInUpWindowContext = createContext(false)