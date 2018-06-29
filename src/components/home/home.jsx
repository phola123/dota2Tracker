import React from 'react';

// component Imports
import Navbar from '../navbar/navbar';
import Header from '../home/header/header';
import Section1 from '../home/section/section1';


const Home = () => {

  return (
    <div className="home__page">
      {  /* Navbar */ }
      <Navbar/>
      {  /* Header section */ }
      <Header/>
      {  /* Header section */ }
      <Section1/>

    </div>
  )

}

export default Home;
