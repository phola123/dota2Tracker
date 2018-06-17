import React from 'react';

import coverLogo from '../../assets/img/Site/logo.png';

const Header = () => {
  return(
    <div className="header__wrapper">
      <div className="spacer__fixed"></div>

      <div className="application-container">

        <div className="_block header__content">

            <img src={coverLogo} alt="logo"></img>
            <h1>Dota Scouter</h1>

        </div>

      </div>
    </div>
  )
}

export default Header;
