/* eslint-disable react/prop-types */
import { Modal, ModalContent } from "@nextui-org/react"
import { useState } from "react"

import { ModalSignin } from "./ModalSignin"
import { ModalRegister } from "./ModalRegister"

export const ModalAuth = ({isOpen,onOpenChange}) => {
  const [typeAuth,setTypeAuth]=useState('login')
  return (
    <>
        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        >
            <ModalContent>
            
            {(onClose) => (
                (typeAuth=='login')
                ?
                <ModalSignin setTypeAuth={setTypeAuth} onClose={onClose}/>
                :
                <ModalRegister setTypeAuth={setTypeAuth} onClose={onClose}/>
            )}

            </ModalContent>
        </Modal>



    
    
    </>
  )
}
