import React from 'react';

import logo from "../../assets/img/Site/logo.png";

const NavbarDesktop = () => {
  return (
    <div className="navbar__container">
      {/*Logo Container*/}
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <p>Dota Scouter</p>
      </div>

      <div className="navbar__item">
        {/*Nav Item*/}
        <div className="navbar__item-desk">
          <p>Meta</p>
        </div>

        {/*Nav Item*/}
        <div className="navbar__item-desk">
          <p>Matches</p>
        </div>

        {/*Nav Item*/}
        <div className="navbar__item-desk">
          <p>Heroes</p>
        </div>

        {/*Nav Item*/}
        <div className="navbar__item-desk">
          <p>Records</p>
        </div>
      </div>

    </div>
  )
}

export default NavbarDesktop;
