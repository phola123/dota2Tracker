import React from 'react';

const NavbarMobile = () => {
  return (
    <div className="mobNav">
      <input type="checkbox" id="menu-toggle"/>
      <label id="trigger" htmlFor="menu-toggle"></label>
      <label id="burger" htmlFor="menu-toggle"></label>
      <ul id="menu">

        <li>
          {/*Nav Item*/}
          <div className="navbar__item-desk">
            <p>Home</p>
          </div>
        </li>

        <li>
          {/*Nav Item*/}
          <div className="navbar__item-desk">
            <p>Meta</p>
          </div>
        </li>

        <li>
          {/*Nav Item*/}
          <div className="navbar__item-desk">
            <p>Matches</p>
          </div>
        </li>

        <li>
          {/*Nav Item*/}
          <div className="navbar__item-desk">
            <p>Records</p>
          </div>

        </li>

        <li>

          {/*Nav Item*/}
          <div className="navbar__item-desk">
            <p>Heroes</p>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default NavbarMobile;
