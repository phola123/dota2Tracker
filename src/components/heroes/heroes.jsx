import React, {Component} from 'react';

import * as appConstants from '../../store/constants/appConstant';

import Hero from '../heroes/hero';
import axios from 'axios';

import {NavLink} from 'react-router-dom';

import globalFunctions from '../shared/global-functions';

import * as $ from 'jquery';

class Heroes extends Component {

    constructor(props) {
        super(props);

        this.state = {

            heroStats: [],
            heroData: null,
        };

        this.searchString = '';
        this.timeout = null;
    }

    //search function
    search = (e) => {
        clearTimeout(this.timeout);
        if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 32) {
            this.searchString = this.searchString + e.key;
            this.searchString && console.log(this.searchString);

            this.setState({
                heroStats: this.state.heroStats.map(hero => this.byNameFilter(hero))
            });

        } else if (e.keyCode === 8) {
            if (this.searchString === '') {

            } else {
                this.searchString = this.searchString.slice(0, -1);
                this.setState({
                    heroStats: this.state.heroStats.map(hero => this.byNameFilter(hero))
                })
            }

        }
        this.timeout = setTimeout( () => {
            this.searchString = '';
            this.setState({
                heroStats: this.state.heroStats.map(hero => this.byNameFilter(hero))
            })
        }, 800)

    }


    // Filter search name function (passed to search function in filter method)
    byNameFilter = (heroData) => {
        const heroName = heroData.localized_name.toLowerCase();
        if (heroName.startsWith(this.searchString)) {

            heroData.isHero = 'filtered';
            const time = setTimeout(() => {
                const heroFiltered = document.querySelector('.filtered');
                if (heroFiltered) {
                    const ele = heroFiltered.offsetTop - 100;
                    $('html, body').stop().animate({scrollTop: ele}, 500);
                    clearTimeout(time);
                }
            }, 100);

        } else {
            heroData.isHero = 'greyed';
        }

        if (this.searchString === '') {
            heroData.isHero = '';
        }

        return heroData;
        // return ;
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

        axios.get(appConstants.heroApi).then(
            response => {

                //filtering out garbage data api is returning
                const heroState = response.data.filter(hero => hero.id);

                //sorting out in alphabetical order
                this.setState({heroStats: heroState.sort(this.compare)});
            }
        )
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.search);
    }

    // Render Method
    render() {

        const HeroDetail = this.state.heroStats;
        // console.log(this.props);

        return (
            <div className="hero__wrapper">

                <header>

                    <div className="heroHeader__wrapper">

                        <div className="spacer__fixed"/>

                        <div className="application-container">

                            <div className="hero__panel">

                                <div className="heroType strHero">
                                    {
                                        HeroDetail.map((hero) => {

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
                                                            hero={hero}
                                                            image={appConstants.apiBase + hero.img}
                                                            localName={hero.localized_name}/>
                                                    </NavLink>

                                            }
                                        )
                                    }
                                </div>
                                <div className="heroType agiHero">
                                    {
                                        HeroDetail.map((hero) => {

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
                                                            hero={hero}
                                                            image={appConstants.apiBase + hero.img}
                                                            localName={hero.localized_name}/>
                                                    </NavLink>
                                            }
                                        )
                                    }
                                </div>
                                <div className="heroType intHero">
                                    {
                                        HeroDetail.map((hero) => {

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
                                                            hero={hero}
                                                            image={appConstants.apiBase + hero.img}
                                                            localName={hero.localized_name}/>
                                                    </NavLink>

                                            }
                                        )
                                    }
                                </div>

                            </div>

                            <div className={this.searchString !== '' ? 'search__query searching' : 'search__query'}>
                                {this.searchString && this.searchString}
                            </div>

                        </div>

                    </div>


                </header>

            </div>


        )


    }


}


export default Heroes;
