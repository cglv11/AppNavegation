import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"


// Definir como luce, qué información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps )

// Define lo que el contexto le va a exponer a los hijos
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logOut: () => void;
    changeUserName: (name: string) => void;
}

// Componente proveedor del estado 
export const AuthProvider = ({ children }: any ) => {

    // similar al UseState pero para contexto, al ser más complejo
    const [ authState, dispatch] = useReducer( authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }
    
    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logOut = () => {
        dispatch({ type: 'logOut' })
    }

    const changeUserName = ( name: string ) => {
        dispatch({ type: 'changeUserName', payload: name})
    }

    return (
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn,
            changeFavoriteIcon,
            logOut: logOut,
            changeUserName: changeUserName
        }}>
            { children }
        </AuthContext.Provider>
    )
}