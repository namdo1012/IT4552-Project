import { Navbar, Nav, Button } from "react-bootstrap";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import * as ROUTES from "../../constant/routes";
import { Link } from "react-router-dom";
import { signOut } from "../../states/actions/auth";

export const NavBar = ({ style }) => {
  const auth = useSelector((state) => state.auth);

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
        <Link
          to={auth.authenticated ? ROUTES.COURSE : ROUTES.LANDING}
          style={{ color: style.color }}
        >
          BT Nihongo
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto app__navbar-list">
          <Nav.Link
            style={{ color: style.color }}
            href={ROUTES.COURSE}
            className="app__navbar-link"
          >
            Khóa học
          </Nav.Link>
          <Nav.Link
            style={{ color: style.color }}
            href={ROUTES.VIDEOS}
            className="app__navbar-link"
          >
            Giải trí
          </Nav.Link>
          <Nav.Link
            style={{ color: style.color }}
            target="_blank"
            href="http://morningjapan.com/"
            className="app__navbar-link"
          >
            Blog
          </Nav.Link>
          <Nav.Link
            style={{ color: style.color }}
            href={ROUTES.REFERENCES}
            className="app__navbar-link"
          >
            Tài liệu
          </Nav.Link>
          <Nav.Link
            style={{ color: style.color }}
            target="_blank"
            href="https://tryjlpt.com/en/"
            className="app__navbar-link"
          >
            Luyện thi
          </Nav.Link>
        </Nav>

        {!auth.authenticated ? (
          <Link to={ROUTES.SIGN_IN}>
            <Button
              variant="outline-secondary"
              className="app__button nav__button--login"
              style={{
                color: style.color,
                outline: `${style.outlineColor} solid 2px`,
                borderRadius: 0,
              }}
            >
              Đăng Nhập
            </Button>
          </Link>
        ) : (
          <Link to={ROUTES.LANDING}>
            <Button
              variant="outline-secondary"
              className="app__button nav__button--login"
              style={{
                color: style.color,
                outline: `${style.outlineColor} solid 2px`,
                borderRadius: 0,
              }}
              onClick={() => {
                signOut();
              }}
            >
              Đăng Xuất
            </Button>
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
