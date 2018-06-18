import React from 'react';

// component Imports
import Navbar from '../navbar/navbar';
import Header from '../home/header/header';


const Home = () => {

  return (
    <div className="home__page">
      {  /* Navbar */ }
      <Navbar/>
      {  /* Header section */ }
      <Header/>

    </div>
  )

}

export default Home;
