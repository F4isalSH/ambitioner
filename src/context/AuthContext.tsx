import React, { createContext, useReducer } from 'react';

 type Actions =
 | {type: ''};




export const AuthContext = createContext(null)

export const authReducer = (state:any, action: Actions)=>{
    switch (action.type){
        
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
