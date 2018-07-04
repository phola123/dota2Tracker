import React from 'react';
import { Link} from 'react-router-dom';

import logo from "../../assets/img/Site/logo.png";

const NavbarDesktop = () => {
  return (
    <div className="navbar__container">
      {/*Logo Container*/}

      <Link to="/">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <p>Dota Stalker</p>
      </div>
    </Link>

    <div className="navbar__item">
      {/*Nav Item*/}
      <div className="navbar__item-desk">
        <Link to="meta"><p>Meta</p></Link>
      </div>

      {/*Nav Item*/}
      <div className="navbar__item-desk">
        <Link to="matches"><p>Matches</p></Link>
      </div>

      {/*Nav Item*/}
      <div className="navbar__item-desk">
        <Link to="heroes"><p>Heroes</p></Link>
      </div>

      {/*Nav Item*/}
      <div className="navbar__item-desk">
        <Link to="records"><p>Records</p></Link>
      </div>
    </div>
  </div>
)
}

export default NavbarDesktop;
