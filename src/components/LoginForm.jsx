import { useContext, useState } from "react";
import { UserContext } from "../context/user/userContext";
import{types} from '../context/user/userReducer'
import axios from'axios'
import jwt from "jwt-decode"
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {

  const [,dispatch] =useContext(UserContext)

  const navigate=useNavigate()
  const initForm = {

    email: "",

    password: "",

  };

 

  const [formState, setFormState] = useState(initForm);

 

  const onChangeForm = ({ target }) => {

    setFormState({

      ...formState,

      [target.name]: target.value,

    });
    console.log(formState)

  };

 

  const handleSubmit =async (e) => {

    e.preventDefault();
    try {

        const{data}= await axios.post('https://backend-p5.onrender.com/users/login',formState,{
            headers:{
                "Context-Type":"application/json"
            }
        })
        const tokenDecodificado=jwt(data.token)
        console.log(tokenDecodificado)
        dispatch({
            type:types.setUserState,
            payload:tokenDecodificado
        })
        // setUser(initialUser)
        window.alert('Usuario logueado')
        navigate('/')

    } catch (error) {
        
        console.error(error)
        window.alert('Error al loguar al usuario')
        dispatch({
            type:types.setError,
            payload:error
        })
    }
    
    addToDB(formState);

    setFormState(initForm);

  };

 

  const addToDB = () => {

    console.log(formState);

  };

 

  return (

    <>

      <div className="container-fluid bg-light text-dark rounded">

        <div className="text-center">

          <h2>Login</h2>

          <p>

            Inicio de sesión

          </p>

        </div>

        <div className="p-3">

          <form action="submit">


            <div className="form-group g-3 ">

              <label className="col-form-label mx-2" htmlFor="email">

                Dirección de correo

              </label>

              <input

                className="form-control shadow"

                name="email"

                placeholder="Escribe su correo aquí"

                type="email"

                value={formState.email}

                onChange={onChangeForm}

              />

            </div>


            <div className="form-group g-3">

              <label className="col-form-label mx-2" htmlFor="consult">

                Password

              </label>

              <input

                className="form-control shadow"

                name="password"

                placeholder="Escribe su clave secreta"

                type="password"

                value={formState.password}

                onChange={onChangeForm}

              />

            </div>

 

            <button

              className="btn btn-primary d-grid col-6 mx-auto mt-2 shadow"

              type="submit"

              id="contact"

              onClick={handleSubmit}

            >

              Ingresar

            </button>

          </form>

        </div>

      </div>

    </>

  );

};