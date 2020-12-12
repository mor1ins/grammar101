import React from 'react';
import {Form} from "react-bootstrap";
import debounce from "./helpers/tools";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextInput.css'


class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.update = props.update;
        //
        // this.state = {
        //     text: '',
        // };
    }

    updateText(event) {
        console.log('update text');
        this.update(event.target.value);
    }

    render() {
        const update = debounce(event => this.updateText(event), 1000);

        return (
            <Form.Control
                as="textarea"
                className="forms__text_input"
                onChange={update} />
        );
    }
}


export default TextInput;
