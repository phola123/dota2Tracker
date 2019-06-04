import React, {Component} from 'react';
import * as appConstants from '../../store/constants/appConstant';
import Popup from '../popups/popup';

class HeroPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        console.log(this.props.heroData);
        return (

            <Popup open={this.props.open} close={this.props.close}>
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
            </Popup>

        )

    }


}

export default HeroPopup;