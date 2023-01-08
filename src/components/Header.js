import React from "react";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
import "./Header.css";
import { authActions } from "../store/auth-slice";

const Header = () => {
  const dispatch = useDispatch();
  const onClickLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li className="logout-button" onClick={onClickLogout}>
            logout
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
