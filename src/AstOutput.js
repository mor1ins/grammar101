import './App.css';
import React from 'react';
import {Accordion, Container, Button, Form, Card} from "react-bootstrap";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './AstOutput.css'

class AstOutput extends React.Component {
    render() {
        return (
            <Form.Control  className="ast_output__view" as="textarea" readOnly={true} />
        );
    }
}


export default AstOutput;
