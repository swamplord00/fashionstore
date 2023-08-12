import React, { useContext } from 'react'
import { UserContext } from '../context/user/userContext'

export const HomePage = () => {

  const [user,]=useContext(UserContext)  
  console.log(user)
  return (
    <>
        <h1>
            HomePage
        </h1>
        <hr />
        {
            (user)?(
                <>
                    {JSON.stringify(user,null,2)}
                </>
            ):(
                <h2>No hay usuario</h2>
            )
        }
    </>
  )
}
