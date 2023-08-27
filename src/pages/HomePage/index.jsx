import  { useContext, } from 'react'
import { UserContext } from '../../context/user/userContext'



const HomePage = () => {
  
  const [state,]=useContext(UserContext)  
  console.log(state)
 

  return (
    <>
        
        <h1 className="px-unit-5 py-unit-5 min-w-unit-3xl">
            HomePage
        </h1>

        
        <hr />
        {
            (state?.user)
                ?(<h2>¡Bienvenido {state.user.username}!.</h2>)
                :(<h2>Bienvenido, registrate o inicia sesión.</h2>)
            
        }
        
    </>
  )
}

export default HomePage