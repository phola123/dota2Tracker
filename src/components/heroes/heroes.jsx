import React, {Component} from 'react';
import Hero from '../heroes/hero'
import axios from 'axios';

import HeroBg from '../../assets/img/Site/heroBg.jpg';

class Heroes extends Component {

    constructor(props) {
        super(props);

        this.state = {

            heroStats: []

        }


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

    // Hero Click Event

    heroClickHandler = (id) => {
        console.log(id);
    }


    // Lifecycle Hooks
    componentDidMount() {
        //Api Calls
        const heroStatURL = "https://api.opendota.com/api/heroStats";

        axios.get(heroStatURL).then(
            response => {

                //filtering out garbage data api is returning
                const heroState = response.data.filter( hero => hero.id );

                //sorting out in alphabetical order
                this.setState({heroStats: heroState.sort(this.compare)});

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

                        <div className="spacer__fixed" />
                        <div className="header__image">
                            <img src={HeroBg} alt="background"/>
                        </div>

                        <div className="application-container">

                            <div className="hero__panel">

                                <div className="heroType strHero">
                                    {
                                        HeroDetail.map((hero, index) => {

                                                return hero.primary_attr === "str" &&
                                                    <Hero clickHandler={() => this.heroClickHandler(hero.id)} key={hero.id}
                                                          image={"https://api.opendota.com" + hero.img}
                                                          localName={hero.localized_name}/>

                                            }
                                        )
                                    }
                                </div>
                                <div className="heroType agiHero">
                                    {
                                        HeroDetail.map((hero, index) => {

                                                return hero.primary_attr === "agi" &&
                                                    <Hero clickHandler={() => this.heroClickHandler(hero.id)} key={hero.id}
                                                          image={"https://api.opendota.com" + hero.img}
                                                          localName={hero.localized_name}/>

                                            }
                                        )
                                    }
                                </div>
                                <div className="heroType inlHero">
                                    {
                                        HeroDetail.map((hero, index) => {

                                                return hero.primary_attr === "int" &&
                                                    <Hero clickHandler={() => this.heroClickHandler(hero.id)} key={hero.id}
                                                          image={"https://api.opendota.com" + hero.img}
                                                          localName={hero.localized_name}/>

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
