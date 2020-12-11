import './App.css';
import React from 'react';
import {Container} from "react-bootstrap";

import Header from "./Header";
import GrammarInput from "./GrammarInput";
import InterfaceTabs from "./InterfaceTabs";


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render() {
    return (
        <div className="App">
            <Header title="grammar101" />
            <div className="container__forms d-flex align-items-stretch">
                <GrammarInput />
                <Container className="d-flex flex-column align-items-stretch">
                    <InterfaceTabs />
                </Container>
            </div>
        </div>
    );
  }
}

export default App;
