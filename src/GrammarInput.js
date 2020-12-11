import React from 'react';
import {Container, Form} from "react-bootstrap";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './GrammarInput.css'


class GrammarInput extends React.Component {
    render() {
        return (
            <Container className="grammar_input__container d-flex flex-column align-items-stretch">
                <div className="grammar_input__title">
                    Your grammar
                </div>
                <Form.Control className="forms__grammar_input" as="textarea"  />
            </Container>
        );
    }
}


export default GrammarInput;
