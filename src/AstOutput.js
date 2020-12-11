import './App.css';
import React from 'react';
import {Container, Button, Form} from "react-bootstrap";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './AstOutput.css'

class AstOutput extends React.Component {
    constructor(props) {
        super(props);

        this.CloseButton = React.createRef();
        this.state = {
          visible: true
        };
    }

    toggle() {
        this.CloseButton.current.innerText = this.state.visible ? '<' : '>';
        this.setState({visible: !this.state.visible});
    }

    view() {
        return (
            <Form.Control  className="ast_output__view" as="textarea" readOnly={true} />
        );
    }

    render() {
        return (
            <Container className="ast_output__container">
                <Button
                    ref={this.CloseButton}
                    className="ast_output__close_button"
                    variant="light"
                    onClick={() => this.toggle()}>
                    >
                </Button>
                {this.state.visible && this.view()}
            </Container>
        );
    }
}


export default AstOutput;
