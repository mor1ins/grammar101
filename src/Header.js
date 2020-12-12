import './App.css';
import React from 'react';

import NavigationBar from "./NavigationBar";

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
            <NavigationBar />
            // <div className="header__container d-flex">
            //     {/*<div className="header__title">*/}
            //     {/*    {this.state.title}*/}
            //     {/*</div>*/}
            //     <NavigationBar />
            // </div>
        );
    }
}

export default Header;
