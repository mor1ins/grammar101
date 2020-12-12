import './App.css';
import React from 'react';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
        };
    }
    

    render() {
        return (
            <div className="header__container d-flex">
                <div className="header__title" onClick={() => window.location.reload(false)}>
                    {this.state.title}
                </div>
            </div>
        );
    }
}

export default Header;
