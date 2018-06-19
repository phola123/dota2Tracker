import React, { Component } from 'react';

import coverLogo from '../../../assets/img/Site/logo.png';

class Header extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      isNightTime: false
    }

  }

  nightTimeChecker = () => {

    // getting current date
    let date = new Date();
    // getting hrs in required format
    let hours = date.getHours()

    let isNightTime = false;
    if( hours >= 18 || (hours >=0 && hours <= 4 ) ) {
      isNightTime = true;
    }
    else {
      isNightTime = false;
    }

    this.setState({isNightTime});

  }

  componentDidMount() {
    this.nightTimeChecker();
  }

  render(){

    return(

      <header>

        <div className="header__wrapper">
          <div className="spacer__fixed"></div>

          <div className="application-container">

            <div className="header__content">

              <div className="coverLogo__container">
                <img src={coverLogo} alt="logo" />
              </div>

              <h1>Dota Stalker</h1>

            </div>

          </div>
        </div>

      </header>

    )

  }

}

export default Header;
