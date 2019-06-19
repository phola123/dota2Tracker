import React from 'react';

const Hero = (props) => {


    return (

        <div onClick={props.clickHandler}
             className={(props.hero && props.hero.isHero) ? `${props.hero.isHero} heroTab` : 'noResult heroTab'}>
            <div className="heroImg__container">
                <img src={props.image} alt={props.localName}/>
            </div>

        </div>

    )


}


export default Hero;
