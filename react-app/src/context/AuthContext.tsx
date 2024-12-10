import { createContext, PropsWithChildren, useContext, useState } from "react"

enum StateTest {
    'checking',
    'login',
    'closed',
    'authenticated'
}

interface AuthState {
    statetValue: StateTest
    loginEmailWithPassword: (email:string, password:string) => void;
    logoutEmailWithPassword: () => void
}

export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}:PropsWithChildren) => {
    
    const [state, setstate] = useState(StateTest.checking)

    const loginEmailWithPassword = (email:string, password:string) => {
        setstate(StateTest.login)
    }

    const logoutEmailWithPassword = () => {
        setstate(StateTest.closed)
    }
    
    return (
        <AuthContext.Provider value={{
            statetValue: state,
            loginEmailWithPassword,
            logoutEmailWithPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}