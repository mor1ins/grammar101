import './App.css';
import React from 'react';
import JSONViewer from 'react-json-viewer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AstOutput.css'


// function stringifyTree(tree) {
//     if ((typeof tree) === '')
//     const keys = Object.keys(tree);
//     return "\n".join(keys.map(key => ));
// }



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
            ast: this.astToString(ast),
        });
    }

    astToString(ast) {
        if (!ast || ast === '')
            return '';

        return JSON.parse(JSON.stringify(ast._cst, null, 2));
    }

    render() {
        // const json = this.astToString();
        return (
            <JSONViewer json={this.state.ast} />
            // <Form.Control
            //     as="textarea"
            //     className="ast_output__view"
            //     readOnly={true}
            //     value={json} />
        );
    }
}


export default AstOutput;
