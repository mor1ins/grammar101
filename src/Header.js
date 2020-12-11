import './App.css';
import React from 'react';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './AstOutput.css'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
        };
    }

    render() {
        return (<div className="header__container">
            <div className="header__title">
                {this.state.title}
            </div>
        </div>);
    }
}

export default Header;
