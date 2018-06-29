import React, { Component } from 'react';
import sectionImg from '../../../assets/img/Site/sec1.jpg';

import ScrollableAnchor , { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset:60, scrollDuration: 800, keepLastAnchorHash:false});

class Section1 extends Component {
  constructor(props){
    super(props);
  }



  render() {

    return(
      <ScrollableAnchor id={'section1'}>
        <section>
          <div className="section__container">
            <div className="header__image">
              <img src={sectionImg} alt="background"/>
            </div>
          </div>
        </section>
      </ScrollableAnchor>

    )



  }
}

export default Section1;
