/* eslint-disable react/prop-types */

import {ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from '../MailIcon.jsx';
import {LockIcon} from '../LockIcon.jsx';
import { useContext, useState } from "react";
import { UserContext } from "../../context/user/userContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { types } from "../../context/user/userReducer.js";
import jwtDecode from "jwt-decode";

export const ModalSignin=({setTypeAuth, onClose})=> {
    const [isFetching,setIsFetching]=useState(false)
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
  
   
  
    const handleSubmit =async () => {
  
      
      setIsFetching(true)
      try {
  
          const{data}= await axios.post('https://backend-p5.onrender.com/users/login',formState,{
              headers:{
                  "Context-Type":"application/json"
              }
          })
          const tokenDecodificado=jwtDecode(data.token)
          console.log(tokenDecodificado)
          dispatch({
              type:types.setUserState,
              payload:tokenDecodificado
          })
          // setUser(initialUser)
          window.alert('Usuario logueado')
          setIsFetching(false)
          navigate('/')
  
      } catch (error) {
          
          console.error(error)
          window.alert('Error al loguear al usuario')
          dispatch({
              type:types.setError,
              payload:error
          })
          setIsFetching(false)
      }
      
      addToDB(formState);
  
      setFormState(initForm);
  
    };
  
   
  
    const addToDB = () => {
  
      console.log(formState);
  
    };

  return (
    <>
      
      
       
          
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  name="email"
                  value={formState.email}
                  onChange={onChangeForm}
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  name="password"
                  value={formState.password}
                  onChange={onChangeForm}
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Link as={Button} onClick={()=>setTypeAuth('register')}>
                    Ir al registro
                </Link>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSubmit} disabled={isFetching}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          
        
      
    </>
  );
}
