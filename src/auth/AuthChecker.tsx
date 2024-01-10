import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
   const navigate = useNavigate();
    // This will just check if the user is logged in. If so, it returns the children, 
    // which are passed a props- it's just whatever component is either protected or not.
    // Otherwise it send them to the login screen.
    useEffect(() => {
        if (!auth.currentUser) {
            navigate("../")
            signInWithPopup(auth, Providers.google)
        }
    },[])
  return (
    <>{children}</>
  )
}

export default AuthChecker
