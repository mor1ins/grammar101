import React from 'react';
import {Container, Form} from "react-bootstrap";
import debounce from "./helpers/tools";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './GrammarInput.css'

const ohm = require('ohm-js');

class GrammarInput extends React.Component {
    constructor(props) {
        super(props);
        this.update = props.update;
    }

    updateGrammar(event) {
        console.log('update grammar');

        let parser = null;
        if (event.target.value) {
            try {
                parser = ohm.grammar(event.target.value);
                this.update(parser);
            } catch (e) {
                console.log(e);
            }
        }
    }



    render() {
        const update = debounce(event => this.updateGrammar(event), 1000);

        return (
            <Container className="grammar_input__container d-flex flex-column align-items-stretch">
                <div className="grammar_input__title">
                    Your grammar
                </div>
                <Form.Control
                    as="textarea"
                    className="forms__grammar_input"
                    onChange={update} />
            </Container>
        );
    }
}


export default GrammarInput;
