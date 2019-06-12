import React, {Component} from 'react';
import * as appConstants from '../../store/constants/appConstant';

class HeroDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        console.log(this.props.heroData);
        return (

                <div className="popHero__wrapper">
                    <div className="popHero__imgContainer">
                        <img src={appConstants.apiBase + this.props.heroData.img}
                             alt={this.props.heroData.localized_name}/>
                    </div>

                    <div className="popHero__type">
                        Type:- {this.props.heroData.attack_type}
                    </div>

                    <div className="popHero__roles">
                        Roles :- {this.props.heroData.roles.map((roles, index) => {

                        if (this.props.heroData.roles.length === index + 1) {
                            return roles;
                        } else {
                            return roles + ",";
                        }

                    })}
                    </div>

                </div>

        )

    }


}

export default HeroDetails;
