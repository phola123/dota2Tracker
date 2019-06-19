import React, {Component} from 'react';

// import components
import NavbarDesktop from '../navbar/navBar__desktop';
import NavbarMobile from '../navbar/navBar__mobile';

class Navbar extends Component {

    // render Method

    render() {

        return (
            <nav>
                <NavbarMobile/>
                <NavbarDesktop/>
            </nav>
        )

    }


}

export default Navbar;
