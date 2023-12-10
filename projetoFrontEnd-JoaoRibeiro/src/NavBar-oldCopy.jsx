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
						<ul className='mainMenu'>
							<li>
								<a href='#'>Home</a>
							</li>
							<li>
								<a href='/views/AboutUsView.jsx'>About us</a>
							</li>
							<li>
								<a href='/views/ContactView'>Contact</a>
							</li>
							<li>
								<a href='/views/TailorMadeTourView.jsx'>Tailor-Made Tour</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
}

export default NavBar;
