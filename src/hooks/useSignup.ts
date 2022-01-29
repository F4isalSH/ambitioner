import { useState } from "react";
import { projectAuth } from "../firebase/config";

interface signUpCredentials {
    email:string
    password:string
    displayName:string
}

export const useSignup = () =>{
    const [error, setError] = useState<any>(null)
    const [isPending, setIsPending] = useState<boolean>(false)

    const signup = async (credentials:signUpCredentials)=> {
        setError(null)
        setIsPending(true)

        try{

           const res = await projectAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
           console.log(res.user)

           if(!res){
               throw new Error ('Could not complete signup')
           }

           await res.user?.updateProfile({displayName: credentials.displayName})

           setIsPending(false)
           setError(null)

        }
        catch(err:any){
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }

    }
    
    return{error, isPending, signup}
}


