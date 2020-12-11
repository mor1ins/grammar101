import React from 'react';
import {Tab, Tabs} from "react-bootstrap";

import TextInput from "./TextInput";
import AstOutput from "./AstOutput";


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './InterfaceTabs.css'

class InterfaceTabs extends React.Component {
    render() {
        return (
            <Tabs variant="pills" defaultActiveKey="input" className="d-flex flex-row align-items-stretch">
                <Tab eventKey="input" title="Input">
                    <TextInput />
                </Tab>
                <Tab eventKey="results" title="Results">
                    <AstOutput />
                </Tab>
            </Tabs>
        );
    }
}

export default InterfaceTabs;
