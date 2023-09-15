import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FaceBook from '../assert/facebook.svg';
import Instagram from '../assert/instagram.svg';
import Youtube from '../assert/youtube.svg';
import Twitter from '../assert/twitter.svg';
const Footer = () => {
	return (
		<Container>
			<Row className="justify-content-center align-items-center text-center">
				<Col>
					<img className="ms-5" src={FaceBook} alt="" />
					<img className="ms-5" src={Instagram} alt="" />
					<img className="ms-5" src={Twitter} alt="" />
					<img className="ms-5" src={Youtube} alt="" />
				</Col>
				
			</Row>
			<Row className="justify-content-center align-items-center text-center mt-4">
				<Col>
					<span className='fw-bolder ms-5'>Conditions of Use</span>
					<span className='fw-bolder ms-5'>Priacy & Policy</span>
					<span className='fw-bolder ms-5'>Press Room</span>
				</Col>
				
			</Row>
			<Row className="justify-content-center align-items-center text-center mt-4">
				<Col>
					<span className='fw-bolder ms-5'>@2023 MovieBox By Gabriel Femi Igbalaye</span>
					
				</Col>
				
			</Row>
		</Container>
	);
};

export default Footer;
