import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = () => (
	<Navbar staticTop collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a>Tast of Thailand</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} >Link</NavItem>
				<NavItem eventKey={2} >Link</NavItem>
				<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
			</Nav>
			<Nav pullRight>
				<LinkContainer to="/">
					<NavItem eventKey={1}>Dashboard</NavItem>
				</LinkContainer>
				<LinkContainer to="/artist-search">
					<NavItem eventKey={2}>Artist Search</NavItem>
				</LinkContainer>
				<NavDropdown eventKey={3} title="Authorization" id="basic-nav-dropdown">
					<LinkContainer to="/logout">
						<MenuItem eventKey={3.1}>Logout</MenuItem>
					</LinkContainer>
					<LinkContainer to="/login">
						<MenuItem eventKey={3.2}>Login</MenuItem>
					</LinkContainer>
				</NavDropdown>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default NavBar;
