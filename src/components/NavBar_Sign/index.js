import { Navbar } from 'react-bootstrap';
import { ImCloud } from "react-icons/im";
import React from 'react'
import './style.css'

export const NavBar_Sign = () => {
  return (
    <Navbar className="app_navbar" collapseOnSelect expand="lg" variant="light">
      <Navbar.Brand href="#home" className="app_logo">
        <ImCloud className="app_icon" />
        BT Nihongo
      </Navbar.Brand>
    </Navbar>
  )
}