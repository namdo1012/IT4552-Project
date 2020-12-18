import "./style.css";
import { NavBarSign } from "../../components/NavBarSign";
import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  return (
    <body>
      <div className="sign_in-container">
        <div classNameName="container">
          <NavBarSign />
          <form action="#" className="sign_in-form">
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
            <button className="sign_in-btn solid">
              <Link to="/course" style={{ color: "#fff" }}>
                đăng nhập
                <MdKeyboardArrowRight className="arrow_icon" />
              </Link>
            </button>

            <div className="ask_sign_up">
              Bạn chưa có tài khoản ?
              <Link to="/signup">
                <input
                  type="submit"
                  value="Đăng ký ngay"
                  className="go_sign_up"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};
