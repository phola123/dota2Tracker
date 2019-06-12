import React, {Component} from 'react';

import * as appConstants from '../../store/constants/appConstant';

import Hero from '../heroes/hero';
import axios from 'axios';

import {NavLink} from 'react-router-dom';

import globalFunctions from '../shared/global-functions';

import HeroBg from '../../assets/img/Site/heroBg.jpg';

class Heroes extends Component {

    constructor(props) {
        super(props);

        this.state = {

            heroStats: [],
            heroData: null

        };
    }


    // sorting by Name
    compare = (firstHero, nextHero) => {

        const localized_nameA = firstHero.localized_name.toUpperCase();
        const localized_nameB = nextHero.localized_name.toUpperCase();
        let comparison = 0;

        if (localized_nameA > localized_nameB) {
            comparison = 1;
        } else if (localized_nameA < localized_nameB) {
            comparison = -1;
        }
        return comparison;


    }

    // Lifecycle Hooks
    componentDidMount() {
        //Api Calls
        const heroStatURL = appConstants.heroApi;

        axios.get(heroStatURL).then(
            response => {

                //filtering out garbage data api is returning
                const heroState = response.data.filter(hero => hero.id);

                //sorting out in alphabetical order
                this.setState({heroStats: heroState.sort(this.compare)});

                console.log(this.state.heroStats);
            }
        )
    }

    // Render Method
    render() {

        const HeroDetail = this.state.heroStats;
        console.log(this.props);

        return (
            <div className="hero__wrapper">

                <header>

                    <div className="header__wrapper">

                        <div className="spacer__fixed"/>
                        <div className="header__image">
                            <img src={HeroBg} alt="background"/>
                        </div>

                        <div className="application-container">

                            <div className="hero__panel">

                                <div className="heroType strHero">
                                    {
                                        HeroDetail.map((hero, index) => {

                                                return hero.primary_attr === "str" &&
                                                    <NavLink herodata={hero} key={hero.id}
                                                             to={`/heroes/${globalFunctions.joinString(hero.localized_name)}`}>
                                                        <Hero
                                                            image={appConstants.apiBase + hero.img}
                                                            localName={hero.localized_name}/>
                                                    </NavLink>

                                            }
                                        )
                                    }
                                </div>
                                <div className="heroType agiHero">
                                    {
                                        HeroDetail.map((hero, index) => {

                                                return hero.primary_attr === "agi" &&
                                                    <NavLink key={hero.id}
                                                             to={`/heroes/${globalFunctions.joinString(hero.localized_name)}`}>
                                                        <Hero
                                                            image={appConstants.apiBase + hero.img}
                                                            localName={hero.localized_name}/>
                                                    </NavLink>
                                            }
                                        )
                                    }
                                </div>
                                <div className="heroType inlHero">
                                    {
                                        HeroDetail.map((hero, index) => {

                                                return hero.primary_attr === "int" &&
                                                    <NavLink key={hero.id}
                                                             to={`/heroes/${globalFunctions.joinString(hero.localized_name)}`}>
                                                        <Hero
                                                            image={appConstants.apiBase + hero.img}
                                                            localName={hero.localized_name}/>
                                                    </NavLink>

                                            }
                                        )
                                    }
                                </div>

                            </div>

                        </div>

                    </div>


                </header>

            </div>


        )


    }


}


export default Heroes;
