import React, {Component} from 'react';
import Popup from '../popups/popup';

class HeroPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    };

    render() {
        console.log(this.props);
        return (

            <Popup open={this.props.open} close={this.props.close}>
                <div className="name">{ this.props.heroData && this.props.heroData.localized_name}</div>
            </Popup>

        )

    }


}

export default HeroPopup;