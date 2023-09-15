import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ChevronRight } from 'react-bootstrap-icons';
import IMDB from '../assert/imdb.svg';
import GRAPE from '../assert/tomato.svg';
import {Link} from 'react-router-dom';

const Featured = ({ match }) => {
	const [ topMovies, setTopMovies ] = useState([]);
	const apiKey = '15c58a8a978fc9b896a22afa476e0234';

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
			.then((response) => response.json())
			.then((data) => {
				const top10Movies = data.results.slice(0, 12);
				setTopMovies(top10Movies);
				console.log(data.results)
			});
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					<h2>Featured Movies</h2>
				</Col>
				<Col md={1} className=" justify-content-center align-items-center ms-auto">
					<Link to='/' className="text-danger text-decoration-none">See More</Link>
					<ChevronRight className="text-danger"/>
				</Col>
			</Row>
			<Row>
				{topMovies.map((movie) => (
					<Col className=" gap-5" key={movie.id} data-testid="movie-card">
						<Link to={`/movies/${movie.id}`} className="text-decoration-none">
						
						<Card style={{ width: '18rem' }}>
							<Card.Img
								data-testid="movie-poster"
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								style={{ width: '18rem', height: '25rem' }}
							/>

							<Card.Body>
								{/* <p>{`Release Date: ${movie.release_date}`}</p> */}
								<p className='lead'>USA,{new Date(movie?.release_date).getUTCFullYear()}</p>
								<Card.Title className="h5">
									<h2 data-testid="movie-title">{movie.title}</h2>
								</Card.Title>
								<div className="d-flex align-items-center">
									<div className="align-items-center justify-content-center d-flex">
										<div>
											<img src={IMDB} alt="" />
										</div>
										<div className="ms-2 me-4 mt-3 ">
											<p>86.0/100</p>
										</div>
									</div>
									<div className="align-items-center d-flex ms-auto">
										<div>
											<img src={GRAPE} alt="" />
										</div>
										<div className=" mt-3 ms-2">
											<p>93%</p>
										</div>
									</div>
								</div>
								<p className="lead">Action, Adventure, Drama</p>
							</Card.Body>
						</Card>
						</Link>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Featured;
