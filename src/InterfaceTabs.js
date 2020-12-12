import React from 'react';
import {Tab, Tabs} from "react-bootstrap";

import TextInput from "./TextInput";
import AstOutput from "./AstOutput";


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './InterfaceTabs.css'

class InterfaceTabs extends React.Component {
    constructor(props) {
        super(props);
        this.update = props.update;
        // this.input = React.createRef();
        // this.output = React.createRef();
        // this.grammar = props.grammar;
    }

    render() {
        return (
            <Tabs variant="pills" defaultActiveKey="input" className="d-flex flex-row align-items-stretch">
                <Tab eventKey="input" title="Input">
                    <TextInput
                        ref={this.input}
                        update={this.update}/>
                </Tab>
                <Tab eventKey="results" title="Results">
                    <AstOutput
                        ref={this.output} />
                </Tab>
            </Tabs>
        );
    }
}

export default InterfaceTabs;
