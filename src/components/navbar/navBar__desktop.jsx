import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../../assets/img/Site/logo.png";

const NavbarDesktop = () => {
  return (
    <div className="navbar__container">
      {/*Logo Container*/}

      <NavLink strict activeClassName="selected" to="/" >
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <p>Dota Stalker</p>
      </div>
    </NavLink>

    <div className="navbar__item">

      {/*Nav Item*/}
      <div className="navbar__item-desk">
        <NavLink strict activeClassName="selected" to="heroes"><p>Heroes</p></NavLink>
      </div>

      {/*Nav Item*/}
      <div className="navbar__item-desk">
        <NavLink strict activeClassName="selected" to="meta"><p>Meta</p></NavLink>
      </div>

      {/*Nav Item*/}
      <div className="navbar__item-desk">
        <NavLink strict activeClassName="selected" to="matches"><p>Matches</p></NavLink>
      </div>

      {/*Nav Item*/}
      <div className="navbar__item-desk">
        <NavLink strict activeClassName="selected" to="records"><p>Records</p></NavLink>
      </div>
    </div>
  </div>
)
}

export default NavbarDesktop;
