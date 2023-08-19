import  { useContext, } from 'react'
import { UserContext } from '../context/user/userContext'


export const HomePage = () => {
  
  const [state,]=useContext(UserContext)  
  console.log(state)
 

  return (
    <>
        <h1>
            HomePage
        </h1>
        <hr />
        {
            (state?.user)
                ?(<h2>Bienvenido{state.user.username}</h2>)
                :(<h2>Bienvenido registrate o inicia sesión</h2>)
            
        }
        
    </>
  )
}
