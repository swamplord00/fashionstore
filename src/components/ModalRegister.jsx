/* eslint-disable react/prop-types */

import {
  Button,
  Checkbox,
  Input,
  Link,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

import { MailIcon } from "./MailIcon";
import { LockIcon } from "./LockIcon";
import { useContext, useState } from "react";
import { UserContext } from "../context/user/userContext";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { types } from "../context/user/userReducer";

export const ModalRegister = ({ setTypeAuth, onClose }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [, dispatch] = useContext(UserContext);

  const initForm = {
    username: "",

    phone: "",

    email: "",

    password: "",
  };

  const [formState, setFormState] = useState(initForm);

  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,

      [target.name]: target.value,
    });
    console.log(formState);
  };

  const handleSubmit = async () => {
    
    setIsFetching(true);
    try {
      const { data } = await axios.post(
        "https://backend-p5.onrender.com/users",
        formState,
        {
          headers: {
            "Context-Type": "application/json",
          },
        }
      );
      localStorage.setItem("userProfile",JSON.stringify(data.token))

      const tokenDecodificado = jwtDecode(data.token);
      console.log(tokenDecodificado);
      dispatch({
        type: types.setUserState,
        payload: tokenDecodificado,
      });
      console.log(data);
      window.alert("Registro exitoso");
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      window.alert("Error al registrar el usuario");
      dispatch({
        type: types.setError,
        payload: error,
      });
      setIsFetching(false);
    }

    console.log(formState);

    addToDB(formState);

    setFormState(initForm);
  };

  const addToDB = () => {
    console.log(formState);
  };

  return (
    <>
      
        
          <>
            <ModalHeader className="flex flex-col gap-1">Signin</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Nombre de usuario"
                placeholder="Nombre se usuario"
                variant="bordered"
                name="username"
                value={formState.username}
                onChange={onChangeForm}
              />
              <Input
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Teléfono"
                placeholder="Teléfono"
                variant="bordered"
                name="phone"
                value={formState.phone}
                onChange={onChangeForm}
              />
              <Input
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                name="email"
                value={formState.email}
                onChange={onChangeForm}
                type="email"
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
              <Link as={Button} onClick={() => setTypeAuth("login")}>
                Ir a Login
              </Link>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                onPress={handleSubmit}
                disabled={isFetching}
              >
                Sign in
              </Button>
            </ModalFooter>
          </>
        
      
    </>
  );
};
