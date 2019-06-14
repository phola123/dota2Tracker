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
            heroData: null,
            heroFiltered: null
        };

        this.searchString = '';

    }

    //search function
    search = (e) => {

        if (e.keyCode >= 65 && e.keyCode <= 90) {
            this.searchString = this.searchString + e.key;
            this.searchString && console.log(this.searchString);

            this.setState({
                heroFiltered: this.state.heroStats.filter(hero => this.byNameFilter(hero))
            });

        } else if (e.keyCode === 8) {
            if (this.searchString === '') {

            } else {
                this.searchString = this.searchString.slice(0, -1);
                this.setState({
                    heroFiltered: this.state.heroStats.filter(hero => this.byNameFilter(hero))
                })
            }

        }

    }

    // Filter search name function (passed to search function in filter method)
    byNameFilter = (heroData) => {
        const heroName = heroData.localized_name.toLowerCase();

        return heroName.startsWith(this.searchString);
    };

    // sorting by Name function (passed to compare method in api call)
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
        //search init
        window.addEventListener('keyup', this.search);

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

    componentWillUnmount() {
        window.removeEventListener('keyup', this.search);
    }

    // Render Method
    render() {

        const HeroDetail = this.state.heroFiltered ? this.state.heroFiltered : this.state.heroStats;
        // console.log(this.props);

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
                                                    <NavLink key={hero.id}
                                                             to={{
                                                                 pathname: `/heroes/${globalFunctions.joinString(hero.localized_name)}`,
                                                                 state: {
                                                                     heroData: hero
                                                                 }
                                                             }}
                                                    >
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
                                                             to={{
                                                                 pathname: `/heroes/${globalFunctions.joinString(hero.localized_name)}`,
                                                                 state: {
                                                                     heroData: hero
                                                                 }
                                                             }}
                                                    >
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
                                                             to={{
                                                                 pathname: `/heroes/${globalFunctions.joinString(hero.localized_name)}`,
                                                                 state: {
                                                                     heroData: hero
                                                                 }
                                                             }}
                                                    >
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
