import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Featured from '../content/Featured';
import './Home.scss';
import SearchBar from '../content/SearchBar';
import Header from '../NavBar/Navbar';
import Play from '../assert/Play.svg';
import IMDB from '../assert/imdb.svg';
import GRAPE from '../assert/tomato.svg';
import Footer from '../Footer/Footer';

const Home = () => {
	const [ movies, setMovies ] = useState([]);
	const [ activeMovieIndex, setActiveMovieIndex ] = useState(0);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const apiKey = '15c58a8a978fc9b896a22afa476e0234'; // Replace with your TMDB API key

				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
				);

				const moviesData = response.data.results.slice(0, 5); // Get the top 5 movies
				setMovies(moviesData);
			} catch (error) {
				console.error('Error fetching movie data:', error);
			}
		};

		fetchMovies();
	}, []);

	return (
		<div>
			<div className="movie-list">
				<div
					className="movie-details"
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies[activeMovieIndex]?.backdrop_path})`,
						backgroundSize: 'cover',
						minHeight: '100vh'
					}}
				>
					<Header />
					<div className="d-flex justify-content-center align-items-center p-5 mt-5">
						<Col md={4}>
							<h1 className="text-white display-3 fw-bold">{movies[activeMovieIndex]?.title}</h1>
							<div className="d-flex align-items-center">
								<div className="align-items-center justify-content-center d-flex">
									<div>
										<img src={IMDB} alt="" />
									</div>
									<div className="ms-2 me-4 mt-3 text-white">
										<p>86.0/100</p>
									</div>
								</div>
								<div className="align-items-center d-flex">
									<div>
										<img src={GRAPE} alt="" />
									</div>
									<div className="text-white mt-3 ms-2">
										<p>93%</p>
									</div>
								</div>
							</div>
							<p  className="text-white">{movies[activeMovieIndex]?.overview}</p>
							<button className="btn btn-danger">
								{' '}
								<span>
									<img src={Play} alt="" />
								</span>{' '}
								Watch TRAILER
							</button>
						</Col>

						<Col md={1} className="movie-navigation ms-auto">
							{movies.map((_, index) => (
								<h2
									style={{ color: 'white', cursor: 'pointer' }}
									key={index}
									onClick={() => setActiveMovieIndex(index)}
									className={activeMovieIndex === index ? 'active' : ''}
								>
									{activeMovieIndex === index ? '-' : index + 1}
								</h2>
							))}
						</Col>
					</div>

					{/* Add more movie details here */}
				</div>
			</div>
			<div className="p-5">
				<Featured />
			</div>
			<div className="p-5">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
