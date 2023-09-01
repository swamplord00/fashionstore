/* eslint-disable react/prop-types */
import { UserContext } from "./userContext"
import {useReducer} from 'react'
import userReducer from './userReducer'
import jwtDecode from "jwt-decode"

const userProfile=()=>{
    const token=JSON.parse(localStorage.getItem("userProfile"))
    if(token){
        const decoded=jwtDecode(token)
        return {user:decoded}
    }
    return null
}

export const UserProvider=({children})=>{

        const [user,dispatch]=useReducer(userReducer,null,userProfile)
        

        return(
            <UserContext.Provider value={[user,dispatch]}>
                {children}
            </UserContext.Provider>

        )

}