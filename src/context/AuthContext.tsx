import React, { createContext, useReducer } from 'react';
import firebase from 'firebase/app'
 type Actions =
 | {type: 'LOGIN'; payload: firebase.User }
 | {type: 'LOGOUT'};




export const AuthContext = createContext(null)

export const authReducer = (state:any, action: Actions)=>{
    switch (action.type){
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state,user:null}
        default:
            return state
    }
}

export const AuthContextProvider: React.FC = ({children}) =>{
    const [state, dispatch] = useReducer(authReducer, {
        user:null
    })

    return(
        <AuthContext.Provider value ={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
