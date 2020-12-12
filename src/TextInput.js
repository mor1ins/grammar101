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
        let color = "#ced4da";
        if (this.state.status && this.state.isInitializedStatus) {
            color = "green"
        } else if (this.state.isInitializedStatus) {
            color = "red"
        }

        return (
            <Form.Control
                as="textarea"
                style={{border: `1px solid ${color}`}}
                className="forms__text_input"
                onChange={update}/>
        );
    }

}


export default TextInput;
