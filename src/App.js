import React from 'react';
import {Container, Tab, Tabs} from "react-bootstrap";

import Header from "./Header";
import GrammarInput from "./GrammarInput";
import TextInput from "./TextInput";
import AstOutput from "./AstOutput";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.output = React.createRef();
        this.input = React.createRef();

        this.state = {
            input: null,
            parser: null,
        };
    }

    updateParser(parser) {
        console.log('updating parser...');
        this.setState({
            ...this.state,
            parser: parser,
        });
        this.parse();
    }

    updateText(input) {
        console.log('updating text...');
        this.setState({
            ...this.state,
            input: input,
        });
        this.parse();
    }

    parse() {
        let ast = null;
        if (this.state.parser && this.state.input) {
            ast = this.state.parser.match(this.state.input);
            this.input.current.updateInputStatus(ast.succeeded());

        }

        this.setState({
            ...this.state,
            output: ast,
        });
        this.output.current.updateAst(this.state.output);
    }

    render() {
        return (
            <div className="App">
                <Header title="grammar101"/>
                <div className="container__forms d-flex align-items-stretch">
                    <GrammarInput update={parser => this.updateParser(parser)}/>
                    <Container className="d-flex flex-column align-items-stretch">
                        <Tabs bg="light" variant="pills" defaultActiveKey="input" className="d-flex flex-row align-items-stretch">
                            <Tab eventKey="input" title="Input">
                                <TextInput
                                    ref={this.input}
                                    update={input => this.updateText(input)} />
                            </Tab>
                            <Tab eventKey="results" title="AST">
                                <AstOutput
                                    ref={this.output}
                                    ast={this.state.output} />
                            </Tab>
                        </Tabs>
                    </Container>
                </div>
            </div>
        );
    }
}

export default App;
