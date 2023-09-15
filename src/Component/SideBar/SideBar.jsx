import { Link } from 'react-router-dom';
import TvShow from '../assert/Movies.png';
import Home from '../assert/Home.svg';
import Projector from '../assert/Movie Projector.svg';
import Series from '../assert/TV Show.svg';
import Calender from '../assert/Calendar.svg';
import Logout from '../assert/Logout.svg';
import './Sidebar.scss';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const SideSlider = () => {
	return (
		<div className="shadow-lg main d-none d-md-block">
			<div>
				<ul className="list-unstyled">
					<li>
						<Link
							to=""
							className="menu-item fw-bolder text-white py-3 mx-2 px-4 d-flex align-items-center text-decoration-none"
						>
							<img src={TvShow} alt="" className="text-primary" />{' '}
							<span className="text-dark h5 fw-bold">MovieBox</span>
						</Link>
					</li>
					<li>
						<Link
							to=""
							className="menu-item fw-bolder text-white mx-4 d-flex align-items-center text-decoration-none"
						>
							<div className="menu-pill">
								<img src={Home} alt="" className="text-primary" />{' '}
								<span className="mx-2 text-dark  fw-bolder">Home</span>
							</div>
						</Link>
					</li>
					<li>
						<Link
							to=""
							className="menu-item fw-bolder text-white m py-3 mx-4 px-4 d-flex align-items-center text-decoration-none"
						>
							<div className="menu-pill ">
								<img src={Projector} alt="" className="text-primary" />{' '}
								<span className="mx-2 text-dark  fw-bolder">Movies</span>
							</div>
						</Link>
					</li>
					<li>
						<Link
							to=""
							className="menu-item fw-bolder text-white m mx-4 px-2 d-flex align-items-center text-decoration-none"
						>
							<div className="menu-pill ">
								<img src={Series} alt="" className="text-primary" />{' '}
								<span className="mx-2 text-dark  fw-bolder">Tv Series</span>
							</div>
						</Link>
					</li>
					<li>
						<Link
							to=""
							className="menu-item fw-bolder text-white m py-4 mx-4 px-4 d-flex align-items-center text-decoration-none"
						>
							{' '}
							<div className="menu-pill ">
								<img src={Calender} alt="" className="text-primary" />{' '}
								<span className="mx-2 text-dark  fw-bolder">Upcoming</span>
							</div>
						</Link>
					</li>
				</ul>
			</div>
			<div className="menu-item fw-bolder text-white py-2 mx-4 px-4 d-flex align-items-center">
				<Card className="cards">
					<Card.Body>
						<h5>Play movies quizes and earn ticket</h5>
						<p>50k people are playing now</p>

						<Button  className='btn btn-sm button text-danger' href="#">Start playing</Button>
					</Card.Body>
				</Card>
			</div>
			<div className="menu-item fw-bolder text-white py-4 mx-4 px-4 d-flex align-items-center">
				<div className="menu-pill">
					<img src={Logout} alt="" className="text-primary" />{' '}
					<span className="mx-2 text-dark lead fw-bold">Log Out</span>
				</div>
			</div>
		</div>
	);
};

export default SideSlider;
