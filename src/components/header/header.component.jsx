import React from "react";
import { Link } from "react-router-dom";

import {auth} from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from "../../assests/crown.svg";

import "./header.styles.scss";

const Header = ({currentUser}) => (
  <div className="header">
    <div className="header-title">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/signin">SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;
