import React from 'react';

// component Imports
import Header from '../home/header/header';
import Section1 from '../home/section/section1';


const Home = () => {

  return (
    <div className="home__page">

      {  /* Header section */ }
      <Header/>
      {  /* Header section */ }
      <Section1/>

    </div>
  )

}

export default Home;
