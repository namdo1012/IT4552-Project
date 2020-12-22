import "./style.css";
import { NavBar } from "../../components/NavBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import React from "react";

export const SignUpPage = () => {
  return (
    <>
      <div className="sign_in-container">
        <div classNameName="container">
          <NavBar
            style={{
              backgroundColor: "#fff",
              color: "#000",
              outlineColor: "#000",
            }}
          />
          <div className="form__container">
            <form action="#" className="sign__in-form">
              <h2 className="title">Đăng Ký</h2>
              <div className="input-field">
                <h4>Họ và tên</h4>
                <input type="text" placeholder="Bách Tùng" />
              </div>
              <div className="input-field">
                <h4>Email</h4>
                <input type="text" placeholder="bachtung@gmail.com" />
              </div>
              <div className="input-field">
                <h4>Password</h4>
                <input type="password" placeholder="*********************" />
              </div>
              <div className="input-field">
                <h4>Password Confirm</h4>
                <input type="password" placeholder="*********************" />
              </div>
              <button className="sign__in-btn solid">
                <Link to="/course" style={{ color: "#fff" }}>
                  đăng nhập
                  <MdKeyboardArrowRight className="arrow_icon" />
                </Link>
              </button>

              <div className="ask_sign_up" style={{ marginTop: "15px" }}>
                Bạn đã có tài khoản ?
                <Link to="/login">
                  <span className="go__sign_up">Đăng nhập ngay</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
