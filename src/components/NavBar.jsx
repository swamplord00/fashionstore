import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { ModalCart } from "./ModalCart";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, useDisclosure, button} from "@nextui-org/react";
import { ModalAuth } from "./ModalAuth";
import { CartIcon } from "./CartIcon";
import { UserContext } from "../context/user/userContext";
import { types } from "../context/user/userReducer";



export const NavBar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const [toggleModalCart,setToggleModalCart]=useState(false)
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [,dispatch]=useContext(UserContext)
  const navigate=useNavigate()

  const handleLogout=()=>{
    console.log("cerrando sesión")
    dispatch({type:types.setLogout})
    navigate('/')
  }

  const[user]=useContext(UserContext)

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  

  const toggleCart=()=>{
    setToggleModalCart(!toggleModalCart)
  }
  return (

    <>
    

    <Navbar onMenuOpenChange={setIsMenuOpen} className="purple-dark">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavLink to='/'>

          <NavbarBrand>
            <p className="font-bold text-inherit">FashionStore</p>
          </NavbarBrand>

        </NavLink>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 sm:items-center sm:justify-center" justify="center">
        <NavbarItem>

            <Link color="foreground" as={NavLink} to='/Catalogue'>
              Catalogo
            </Link>

          
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            
          </Link>
        </NavbarItem>
        Carrito
        <NavbarItem className="mt-2">
          <button color="foreground"  onClick={toggleCart} className="gap-2">
          <CartIcon/>
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link onClick={handleLogout}>Logout</Link>
        </NavbarItem>
        <NavbarItem>
          {user ?user.user.username:null}
          <Button  color="primary" onClick={onOpen} variant="flat">
            Sign in
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    
    {
            (toggleModalCart)&&<ModalCart toggle={toggleCart}/>
    }


    <ModalAuth isOpen={isOpen} onOpenChange={onOpenChange} />
    </>



    




  );

};