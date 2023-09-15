import { useRoutes } from 'react-router-dom';
import Home from '../Page/Home.jsx'
import MovieDetails from '../Page/Movie Detaiils/MovieDetails.jsx';

export const Routes = () => {
	return useRoutes([
		{
			path: '/',
			element: <Home />
		},
		{
			path: '/movies/:id',
			element: <MovieDetails/>
		},
	]);
};
