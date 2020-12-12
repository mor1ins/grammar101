import './App.css';
import React from 'react';
import {Form} from "react-bootstrap";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './AstOutput.css'


class AstOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ast: props.ast || '',
        };
    }

    updateAst(ast) {
        this.setState({
            ...this.state,
            ast: ast,
        });
    }

    render() {
        return (
            <Form.Control
                as="textarea"
                className="ast_output__view"
                readOnly={true}
                value={ JSON.stringify(this.state.ast._cst, null, 2) || '' } />
        );
    }
}


export default AstOutput;
