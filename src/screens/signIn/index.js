import './style.css';
import { NavBar_Sign } from '../../components/NavBar_Sign';
import { MdKeyboardArrowRight } from "react-icons/md"
import React from "react";

export const SignInPage = () => {
  return (
    <body>
      <div className="sign_in-container">
        <div classNameName="container">
        <NavBar_Sign />
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
              đăng nhập
              <MdKeyboardArrowRight className="arrow_icon"/>
            </button>
            <div href="#" className="ask_sign_up">
              Bạn chưa có tài khoản ?
              <input type="submit" value="Đăng ký ngay" className="go_sign_up" />
            </div>
          </form>
        </div>
      </div>
    </body>
  )
}
