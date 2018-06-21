import React, { Component } from 'react';

import coverLogo from '../../../assets/img/Site/logo.png';
import bgImg from '../../../assets/img/Site/bg_02.jpg';
import bgImg2 from '../../../assets/img/Site/bg-01.jpg';

class Header extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      isNightTime: false,
      isPlaying : false
    }

    this.newSound = new Audio("https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/4/4f/Darkness.mp3");

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

  dialougePlayer = () => {

    this.setState({isNightTime: true});

    setTimeout(()=> {
      this.setState({isNightTime: false});
    },40000)

    if( this.newSound.paused ) {
      this.newSound.play();
    }
    else if(!this.newSound.paused) {
      this.newSound.pause();
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

              <div onClick={this.dialougePlayer} className="coverLogo__container">
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
