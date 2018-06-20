import React, { Component } from 'react';

import coverLogo from '../../../assets/img/Site/logo.png';
import bgImg from '../../../assets/img/Site/bg_02.jpg';
import bgImg2 from '../../../assets/img/Site/bg-01.jpg';

class Header extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      isNightTime: false
    }

  }
  // night time Checker
  nightTimeChecker = () => {

    // getting current date
    let date = new Date();
    // getting hrs in required format
    let hours = date.getHours()

    let isNightTime = false;
    console.log(hours);
    if( hours >= 18 || (hours >=0 && hours <= 4 ) ) {
      isNightTime = true;
    }
    else {
      isNightTime = false;
    }

    this.setState({isNightTime});
    console.log(isNightTime);


  }

  // nightLight Setter

  nightLight = () => {

    if(this.state.isNightTime) {
      document.querySelector(".left__eye").classList.add("eyeLightNight");
      document.querySelector(".right__eye").classList.add("eyeLightNight");
    }
    else {
      document.querySelector(".left__eye").classList.remove("eyeLightNight");
      document.querySelector(".right__eye").classList.remove("eyeLightNight");
    }

  }

// lifecycle Hooks
  componentWillMount() {
    this.nightTimeChecker();
  }

  componentDidMount() {
    this.nightLight();
  }

  render(){

    return(

      <header>

        <div className="header__wrapper">
          <div className="spacer__fixed"></div>
          <div className="header__image">
            <img src={this.state.isNightTime ? bgImg : bgImg2} alt="background"/>
          </div>

          <div className="application-container">

            <div className="header__content">

              <div className="coverLogo__container">
                <div className="left__eye eye"></div>
                <img src={coverLogo} alt="logo" />
                <div className="right__eye eye"></div>
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
