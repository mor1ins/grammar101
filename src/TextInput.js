import React from 'react';
import {Form} from "react-bootstrap";
import debounce from "./helpers/tools";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextInput.css';


class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.update = props.update;
        this.state = {
            status: false,
            isInitializedStatus: false,
        };
    }

    updateInputStatus(status) {
        this.setState({
            ...this.state,
            status,
            isInitializedStatus: true,
        });
    }

    updateText(event) {
        console.log('update text');
        this.update(event.target.value);
        if (event.target.value === "") {
            this.setState({
                ...this.state,
                isInitializedStatus: false,
            });
        }
    }

    render() {
        const update = debounce(event => this.updateText(event), 1000);
        let color = "white";
        if (this.state.status && this.state.isInitializedStatus) {
            color = "#b8e3ab"
        } else if (this.state.isInitializedStatus) {
            color = "#ffd0d0"
        }

        return (
            <Form.Control
                as="textarea"
                style={{background: color}}
                className="forms__text_input"
                onChange={update}/>
        );
    }
}


export default TextInput;
