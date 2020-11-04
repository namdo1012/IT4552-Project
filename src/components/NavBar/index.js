import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import React from 'react'
import './style.css'

export const NavBar = () => {
  return (
    <Navbar className="app__navbar" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home" className="app__logo">
        <BsFillBrightnessHighFill className="app__icon" />
        BT Nihongo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto app__navbar-list">
          <Nav.Link href="#features" className="app__navbar-link">Khóa học</Nav.Link>
          <Nav.Link href="#pricing" className="app__navbar-link">Giải trí</Nav.Link>
          <Nav.Link href="#pricing" className="app__navbar-link">Blog</Nav.Link>
          <Nav.Link href="#pricing" className="app__navbar-link">Tài liệu</Nav.Link>
          <Nav.Link href="#pricing" className="app__navbar-link">Luyện thi</Nav.Link>
        </Nav>

        <Button variant="outline-secondary" className="app__button nav__button--login">Đăng nhập</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

