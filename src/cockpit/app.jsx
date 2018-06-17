import React, { Component } from 'react';

// import components
import NavbarDesktop from '../components/navbar/navBar__desktop';
import NavbarMobile from '../components/navbar/navBar__mobile';
import Header from '../components/header/header';

//material Imports
// import Button from '../material/material__components/CustomButtons/Button';

class App extends Component {
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
    window.addEventListener("resize", this.checkWindowResize )
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

  render() {

    return(
      <div className="site__wrapper">
        <nav>
          { this.state.isMobile ? <NavbarMobile/> : <NavbarDesktop/> }
        </nav>
        <header>
          <Header/>
        </header>
      </div>
    );

  }


}


export default App;
