import './App.css';
import React from 'react';
import {Form} from "react-bootstrap";

import Header from "./Header";
import GrammarInput from "./GrammarInput";
import TextInput from "./TextInput";
import AstOutput from "./AstOutput";


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.deviceList = React.createRef();
  }


  render() {
    return (
        <div className="App">
            <Header title="grammar101" />
            <Form className="container__forms">
              <GrammarInput />
              <TextInput />
              <AstOutput />
            </Form>
        </div>
    );
  }
}

export default App;
