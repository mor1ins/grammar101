import './App.css';
import React from 'react';
import {Form} from "react-bootstrap";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


class GrammarInput extends React.Component {
    render() {
        return (
            <Form.Control className="forms__grammar_input" as="textarea"  />
        );
    }
}


export default GrammarInput;
