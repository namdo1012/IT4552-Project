import { Navbar, Nav, Button } from "react-bootstrap";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const NavBar = ({ style }) => {
  return (
    <Navbar
      style={{ ...style }}
      className="app__navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand
        href="#home"
        className="app__logo"
        style={{ color: style.color }}
      >
        <BsFillBrightnessHighFill
          className="app__icon"
          style={{ color: style.color }}
        />
        <Link to="/" style={{ color: style.color }}>
          BT Nihongo
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto app__navbar-list">
          <Nav.Link
            style={{ color: style.color }}
            href="/course"
            className="app__navbar-link"
          >
            Khóa học
          </Nav.Link>
          <Nav.Link
            style={{ color: style.color }}
            href="/videos"
            className="app__navbar-link"
          >
            Giải trí
          </Nav.Link>
          <Nav.Link
            style={{ color: style.color }}
            href="#pricing"
            className="app__navbar-link"
          >
            Blog
          </Nav.Link>
          <Nav.Link
            style={{ color: style.color }}
            href="/references"
            className="app__navbar-link"
          >
            Tài liệu
          </Nav.Link>
          <Nav.Link
            style={{ color: style.color }}
            href="#pricing"
            className="app__navbar-link"
          >
            Luyện thi
          </Nav.Link>
        </Nav>

        <Link to="/login">
          <Button
            variant="outline-secondary"
            className="app__button nav__button--login"
            style={{
              color: style.color,
              outline: `${style.outlineColor} solid 2px`,
            }}
          >
            Đăng Nhập
          </Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
