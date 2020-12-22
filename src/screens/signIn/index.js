import "./style.css";
// import { NavBarSign } from "../../components/NavBarSign";
import { NavBar } from "../../components/NavBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";

export const SignInPage = () => {
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
              <h2 className="title">Đăng Nhập</h2>
              <div className="input-field">
                <h4>Email</h4>
                <input type="text" placeholder="bachtung@gmail.com" />
              </div>
              <div className="input-field">
                <h4>Số điện thoại</h4>
                <input type="text" placeholder="414235235255525" />
              </div>
              <div className="input-field">
                <h4>Password</h4>
                <input type="password" placeholder="*********************" />
              </div>
              <button className="sign__in-btn solid">
                <Link to="/course" style={{ color: "#fff" }}>
                  đăng nhập
                  <MdKeyboardArrowRight className="arrow_icon" />
                </Link>
              </button>

              <div className="ask_sign_up" style={{ marginTop: "15px" }}>
                Bạn chưa có tài khoản ?
                <Link to="/signup">
                  <span className="go__sign_up">Đăng ký ngay</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
