import { AuthState } from './AuthContext';

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'logOut'}
    | { type: 'changeFavIcon', payload: string}
    | { type: 'changeUserName', payload: string};
    

// generar estado
export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {


    // se encarga de modificar el estado creando una copia del nuevo
    switch ( action.type ) {
        case 'signIn':
            // state.isLoggedIn = true (Esto es mutar el estado, NO SE PUEDE HACER)
            // return state;
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case 'changeUserName':
            return { 
                ...state,
                username: action.payload
            }
        default:
            return state;
    }

}