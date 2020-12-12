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

        this.state = {
            status: 'init',
        };
    }

    setStatus(status) {
        this.setState({
            ...this.state,
            status: status,
        });
    }

    updateGrammar(event) {
        console.log('update grammar');

        let parser = null;
        if (event.target.value) {
            try {
                parser = ohm.grammar(event.target.value);
                this.update(parser);
                this.setStatus('success');
            } catch (e) {
                console.log(e);
                this.setStatus('fail');
            }
        }
        else {
            this.setStatus('init');
        }
    }



    render() {
        const update = debounce(event => this.updateGrammar(event), 1000);

        return (
            <Container className="grammar_input__container d-flex flex-column align-items-stretch">
                {/*<div className="grammar_input__title"></div>*/}
                <Form.Control
                    as="textarea"
                    className={`forms__grammar_input ${this.state.status}`}
                    onChange={update}
                    placeholder="insert your grammar here" />
            </Container>
        );
    }
}


export default GrammarInput;
