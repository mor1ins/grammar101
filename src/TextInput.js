import React from 'react';
import {Form} from "react-bootstrap";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextInput.css'

class TextInput extends React.Component {
    render() {
        return (
            <Form.Control className="forms__text_input" as="textarea" />
        );
    }
}


export default TextInput;
