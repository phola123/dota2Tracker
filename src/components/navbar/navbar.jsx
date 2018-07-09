import React, { Component } from 'react';

// import components
import NavbarDesktop from '../navbar/navBar__desktop';
import NavbarMobile from '../navbar/navBar__mobile';

class Navbar extends Component {
  // constructor
  constructor(props){
    super(props);

    // state object
    this.state = {
      isMobile : false
    }

  }
  // lifecycle hooks
  componentDidMount() {
    window.addEventListener("resize", this.checkWindowResize );
    window.addEventListener("load", this.checkWindowResize );
    // setTimeout(()=>{
    //     document.querySelector(".coming__soon").classList.add("display-none");
    // },10000);
    // setTimeout(()=>{
    //     document.querySelector(".coming__soon").classList.add("gg");
    // },10200);

  }

  // windows size checker
  checkWindowResize = () => {
    let boolValue = null; 
    if( window.innerWidth <= 991 ) {
      boolValue = true;
    }
    else {
      boolValue = false;
    }
    this.setState({
      isMobile : boolValue
    });
  }

  // render Method

  render() {

    return(
      <nav>
        { this.state.isMobile ? <NavbarMobile/> : <NavbarDesktop/> }
      </nav>
    )

  }


}

export default Navbar;
