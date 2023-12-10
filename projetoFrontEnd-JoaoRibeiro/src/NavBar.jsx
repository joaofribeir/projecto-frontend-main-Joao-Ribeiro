import { Link, Route, Switch } from 'wouter'; // npm i wouter

import AboutUsView from './views/AboutUsView.jsx';
import ContactView from './views/ContactView.jsx';
import HomeView from './views/HomeView.jsx';
import ExperiencesView from './views/ExperiencesView.jsx';
import NotFoundPageView from './views/NotFoundPageView.jsx';
function NavBar() {
	return (
		<>
			<div className='navBar'>
				<nav className='headerMenu'>
					<div className='headerMenuLogo'>
						<a href='./index.html'>
							<img src='/img\logo.png' className='logoHome' id='logoHome' />
						</a>
					</div>
					<div className='headerMenuOptions'>
						<div className='mainMenu'>
							<ul className='mainMenuList'>
								<li>
									<Link href='/'>
										<h3>Home</h3>
									</Link>
								</li>
								{/* qual devo utilizar o 'a' ou 'link' */}
								<li>
									<Link href='/Experiences'>
										<h3>Experiences</h3>
									</Link>
								</li>
								<li>
									<Link href='/AboutUs'>
										<h3>About us</h3>
									</Link>
								</li>
								<li>
									<Link href='/Contact'>
										<h3>Contact</h3>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<Switch>
					<Route path='/'>
						<HomeView />
					</Route>
					<Route path='/Experiences'>
						<ExperiencesView />
					</Route>
					<Route path='/AboutUs'>
						<AboutUsView />
					</Route>

					<Route path='/Contact'>
						<ContactView />
					</Route>

					<Route path='/NotFoundPage'>
						<NotFoundPageView />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default NavBar;
