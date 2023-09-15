import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from '../content/SearchBar';
import TvShow from '../assert/Logo.svg';
import Bar from '../assert/Menu.svg';

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" className="">
			<Container className="text-white">
				<div>
					<img src={TvShow} alt="" className="" />
				</div>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto" />
					<Nav className="me-auto">
						<SearchBar />
					</Nav>
					<Nav>
						<div>
							<span>Sign in</span>
							<img src={Bar} alt="" className="ms-3" />
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
