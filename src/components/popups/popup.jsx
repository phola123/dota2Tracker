import React, {Component} from 'react';

// material ui

import Dialog from '@material-ui/core/Dialog';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

function Transition(props) {
    return <Grow {...props} />;
}

class Popup extends Component {

    render() {

        return (

            // common wrapper for Popups

            <Dialog
                open={this.props.open}
                onClose={this.props.close}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="popup__class"
            >
                <Paper elevation={4}>
                    {this.props.children}
                </Paper>
            </Dialog>

        )

    }
};

export default Popup;