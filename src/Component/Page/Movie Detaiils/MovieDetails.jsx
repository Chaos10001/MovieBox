import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import Loading from '../../Utils/Loading';
import { Container, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import SideSlider from '../../SideBar/SideBar';
import Stacke from '../../assert/Two Tickets.svg';
import Line from '../../assert/List.svg';
import img from '../../assert/Rectangle 37.png';
import './index.scss';

const MovieDetails = () => {
	const { id } = useParams();
	const [ movieDetails, setMovieDetails ] = useState(null);
	const apiKey = '15c58a8a978fc9b896a22afa476e0234';

	useEffect(
		() => {
			fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
				.then((response) => response.json())
				.then((data) => {
					setMovieDetails(data);
					console.log(data);
				});
		},
		[ id ]
	);

	if (!movieDetails) {
		return (
			<div>
				<Loading />
			</div>
		);
	}
	const genres = movieDetails.genres.map((genre) => genre.name).join(', ');

	return (
		<Container>
			<Row>
				<Col md={1}>
					<SideSlider />
				</Col>
				<Col>
					<Row>
						<img
							src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
							alt={movieDetails.title}
							data-testid="movie-poster"
							className="background" // Add a CSS class for styling
						/>
						<Col md={8}>
							<div>
								<span className="h5 fw-bold" data-testid="movie-title">
									{movieDetails.title}
								</span>
								<span className="fw-bolder h2 ms-2 me-2">.</span>
								<span className="h5 fw-bold" data-testid="movie-release-date">
									{new Date(movieDetails.release_date).getUTCFullYear()}
								</span>

								<span className="fw-bolder h2 ms-2 me-2">.</span>

								<span className="h5 fw-bold" data-testid="movie-runtime">
									PG-13
								</span>
								<span className="fw-bolder h2 ms-2 me-2">.</span>
								<span className="h5 fw-bold  me-4" data-testid="movie-runtime">
									{new Date(movieDetails.runtime).getUTCMilliseconds()}m
								</span>
								<span data-testid="movie-genres" className="text-danger fw-bold">
									{genres}
								</span>
								<span />
								<p data-testid="movie-overview">{movieDetails.overview}</p>
							</div>
							<div>
								<h5 className="mt-4">
									Director: <span className="text-danger">Micheal John</span>{' '}
								</h5>
								<h5 className="mt-4">
									Writers: <span className="text-danger">Micheal John</span>{' '}
								</h5>
								<h5 className="mt-4">
									Stars: <span className="text-danger">Micheal John</span>{' '}
								</h5>
							</div>
							<div className="d-flex align-items-center">
								<div>
									<button className="bg-danger btn btn-md text-white fw-bold">
										Top rated movie #65
									</button>
								</div>
								<div>
									<Form.Select size="md" style={{ width: '12rem' }}>
										<option className="col col-md-10">Awards 9 nomination</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</Form.Select>
								</div>
							</div>
						</Col>
						<Col>
							<div className="ms-auto text-end mt-2">
								<StarFill className="text-warning h5" />
								<span className="ms-2 h5">8.5</span>
								<span className="ms-2 fw-bold">|</span>
								<span className="ms-2 h5 fw-bold">350k</span>
							</div>
							<div className="buttons text-end">
								<button className="bg-danger btn btn-md text-white col col-8 fw-bold mb-2">
									{' '}
									<img src={Stacke} alt="" /> See Showtimes
								</button>
								<button className="Bg-background btn btn-md text-dark col col-8 fw-bold">
									{' '}
									<img src={Line} alt="" /> More Watch options
								</button>
							</div>
							<div className="text-end mt-4">
								<img src={img} alt="" style={{width: "16rem"}} />
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default MovieDetails;
