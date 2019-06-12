import React from 'react';
import {Route} from 'react-router-dom';

// import components
import Home from '../components/home/home';
import Navbar from '../components/navbar/navbar';
import Heroes from '../components/heroes/heroes';
import HeroDetails from '../components/heroes/heroDetails';

//material Imports
// import Button from '../material/material__components/CustomButtons/Button';

const App = (props) => {
    const match = props.match;
    console.log(match);
    return (
        <div className="site__wrapper">
            {  /* Navbar */}
            <Navbar/>
            {  /* Routes */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/heroes" exact component={Heroes}></Route>
            <Route path="/heroes/hero" component={HeroDetails}></Route>
            <Route path="/meta" exact></Route>
            <Route path="/matches" exact></Route>
            <Route path="/records" exact></Route>

        </div>
    )

}

export default App;
