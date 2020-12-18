import "./style.css";
import { NavBarSign } from "../../components/NavBarSign";
import { Link } from "react-router-dom";
import React from "react";

export const SignUpPage = () => {
  return (
    <body>
      <div className="sign_in-container">
        <div classNameName="container">
          <NavBarSign />
          <form action="#" className="sign_in-form">
            <h2 className="title">Đăng ký</h2>
            <div className="input-field">
              <h4>Họ và tên</h4>
              <input type="text" placeholder="Bách Tùng" />
            </div>
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
            <div className="input-field">
              <h4>Confirm Password</h4>
              <input type="password" placeholder="*********************" />
            </div>
            <button className="sign_in-btn solid">
              <Link to="/course" style={{ color: "#fff" }}>
                đăng ký
              </Link>
            </button>
            <div className="ask_sign_in">
              Bạn đã có tài khoản ?
              <Link to="/login">
                <input
                  type="submit"
                  value="Đăng nhập ngay"
                  className="go_sign_in"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};
