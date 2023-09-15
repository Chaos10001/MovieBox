import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Loading from '../Utils/Loading';
import './index.scss';


const SearchBar = () => {
	const tmdbApiKey = '15c58a8a978fc9b896a22afa476e0234';
	const [ query, setQuery ] = useState('');
	const [ movies, setMovies ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	useEffect(
		() => {
			const fetchMovies = async () => {
				setIsLoading(true);
				const response = await fetch(
					`https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${query}`
				);
				const data = await response.json();
				setMovies(data.results);
				console.log(data.results);
				setIsLoading(false);
			};
			fetchMovies();
		},
		[ query ]
	);
	return (
		<div>
			<input
				className=""
				type="text"
				placeholder="What do you want to watch?"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			{isLoading ? (
				<div className="text-center">
					<Loading />{' '}
				</div>
			) : (
				<ul>
					{movies.map((movie) => (
						<Card style={{ width: '18rem' }}  key={movie.id}>
							<Card.Img
								data-testid="movie-poster"
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								style={{ width: '18rem', height: '25rem' }}
							/>

							<Card.Body>
								
								<p className='lead'>USA,{new Date(movie?.release_date).getUTCFullYear()}</p>
								<Card.Title className="h5">
									<h1>{movie.title}</h1>
								</Card.Title>
								
								<p className="lead">Action, Adventure, Drama</p>
							</Card.Body>
						</Card>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchBar;
