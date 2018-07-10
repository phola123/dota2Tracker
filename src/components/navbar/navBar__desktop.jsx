import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../../assets/img/Site/logo.png";

const NavbarDesktop = () => {
  return (
    <div className="navbar__container">
      {/*Logo Container*/}

      <NavLink exact to="/" >
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <p>Dota Stalker</p>
      </div>
    </NavLink>

  <div className="navbar__item">

    {/*Nav Item*/}
    <div className="navbar__item-desk">
      <NavLink exact  to="/heroes">Heroes</NavLink>
    </div>

    {/*Nav Item*/}
    <div className="navbar__item-desk">
      <NavLink exact  to="/meta">Meta</NavLink>
    </div>

    {/*Nav Item*/}
    <div className="navbar__item-desk">
      <NavLink exact  to="/matches">Matches</NavLink>
    </div>

    {/*Nav Item*/}
    <div className="navbar__item-desk">
      <NavLink exact  to="/records">Records</NavLink>
    </div>
  </div>
</div>
)
}

export default NavbarDesktop;
