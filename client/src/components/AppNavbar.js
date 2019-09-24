//this component will have a collapsable 'hamburger' menu containing links
import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container} from 'reactstrap';

class AppNavbar extends Component {
    state ={
        isOpen: false
    }
    toggleNavbar=()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand>Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse  isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <NavLink  href="#">GitHub</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Other</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Another</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default AppNavbar;