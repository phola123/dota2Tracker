import React from 'react';

import coverLogo from '../../../assets/img/Site/logo.png';

const Header = () => {
  return(

    <header>

      <div className="header__wrapper _block">
        <div className="spacer__fixed"></div>

        <div className="application-container">

          <div className="header__content _block">

            <img src={coverLogo} alt="logo"></img>
            <h1>Dota Stalker</h1>

          </div>

        </div>
      </div>

    </header>

  )
}

export default Header;
