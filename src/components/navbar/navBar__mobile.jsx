import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarMobile = () => {
  return (
    <div className="mobNav">
      <input type="checkbox" id="menu-toggle"/>
      <label className="mobTrigger" id="trigger" htmlFor="menu-toggle"></label>
      <label className="mobTrigger" id="burger" htmlFor="menu-toggle"></label>
      <ul id="menu">

        <li>
          {/*Nav Item*/}
          <div className="navbar__item-desk">
            <NavLink exact to="/">Home</NavLink>
          </div>
        </li>

        <li>
          {/*Nav Item*/}
          <div className="navbar__item-desk">
            <NavLink exact to="/heroes">Heroes</NavLink>
          </div>
        </li>

        <li>
          {/*Nav Item*/}
          <div className="navbar__item-desk">
            <NavLink exact to="/matches">Matches</NavLink>
          </div>
        </li>

        <li>
          {/*Nav Item*/}
          <div className="navbar__item-desk">
            <NavLink exact to="/records">Records</NavLink>
          </div>

        </li>

        <li>

          {/*Nav Item*/}
          <div className="navbar__item-desk">
          <NavLink exact to="/meta">Meta</NavLink>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default NavbarMobile;
