import React from 'react';
import {Navbar, Nav, } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'


class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar className="navbar__container" bg="light">
                <Navbar.Brand href="#home">grammar101</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/*<Nav.Link href="/">Home</Nav.Link>*/}
                        <Nav.Link href="https://github.com/mor1ins/grammar101">Source</Nav.Link>
                        {/*TODO: вставь ссылку на хороший тутор по грамматикам*/}
                        <Nav.Link href="#link">What are grammars?</Nav.Link>
                    </Nav>
                    {/*<Form inline>*/}
                    {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                    {/*    <Button variant="outline-success">Search</Button>*/}
                    {/*</Form>*/}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;