import React, { Component } from 'react';
import axios from 'axios';

import coverLogo from '../../../assets/img/Site/logo.png';
import bgImg from '../../../assets/img/Site/bg_02.jpg';
import bgImg2 from '../../../assets/img/Site/bg-01.jpg';
import dotaDown from '../../../assets/img/Site/logo2.png'

class Header extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      isNightTime: false,
      isPlaying : false,
      nightLight: false
    }

    this.leftEye = ["eye" , "left__eye"];
    this.rightEye = ["eye" , "right__eye"];



    this.newSound = new Audio("https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/4/4f/Darkness.mp3");
    this.nightTime = new Audio("https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/f/f1/Nstalk_spawn_02.mp3");

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

      this.setState({nightLight:true});
      this.leftEye.push("eyeLightNight");
      this.rightEye.push("eyeLightNight");
      document.querySelector(".header__wrapper").style.background = "rgba(0, 0, 0, 0.56)";
      this.setState({
        nightLight:true
      });
    }
    else {

      // Checking if element has eyeLightNight class
      for(let el of this.leftEye){
        el === "eyeLightNight" ? this.leftEye.splice(-1 , 1) : null ;
      }

      for(let el of this.rightEye){
        el === "eyeLightNight" ? this.rightEye.splice(-1 , 1) : null ;
      }

      this.setState({nightLight:false});
      document.querySelector(".header__wrapper").style.background = "none";

    }


  }

  // audio player

  dialougePlayer = () => {

    this.nightLight();

    // ultimate Effect
    if(!this.state.isNightTime) {
      this.setState({isNightTime: true});

      setTimeout(()=> {
        this.nightLight();
      },1000);

      if( this.newSound.paused ) {
        this.newSound.play();


      }
      else if(!this.newSound.paused) {
        this.newSound.load();
      }

      setTimeout(()=> {
        this.nightTimeChecker();
        this.nightLight();
      },40000)

    }

    // Night Dialouge
    else {
      if( this.nightTime.paused ) {
        this.nightTime.play();

      }
      else if(!this.nightTime.paused) {
        this.nightTime.load();
      }
    }


  }

  // lifecycle Hooks
  componentWillMount() {
    this.nightTimeChecker();
  }

  componentDidMount() {
    this.nightLight();
  }

  componentDidUpdate() {
    axios.get("https://api.opendota.com/api/heroes").then(response => {
      console.log(response);
    })
  }

  // Render Method

  render(){

    console.log("render method called");

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
                <div className={this.leftEye.join(" ")}></div>
                <img src={coverLogo} alt="logo" />
                <div className={this.rightEye.join(" ")}></div>
              </div>

              <h1>Dota Stalker</h1>
              <p>A Dota 2 Data Portal</p>

            </div>

          </div>
          <div className="dotaDown__container">
            <a  className="dotaDown" href='#section1 '>
              <img src={dotaDown} alt="down"/>
            </a>
          </div>
        </div>

      </header>

    )

  }

}

export default Header;
