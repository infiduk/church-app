import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default class MyNavbar extends Component {
    render() {
        return (
            <>
                <Navbar expand="lg" variant="light" bg="white">
                    <Container>
                        <Navbar.Brand href="/">뒤로가기</Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }
}