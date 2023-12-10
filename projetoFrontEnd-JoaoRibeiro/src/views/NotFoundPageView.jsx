import NavBar from '../NavBar.jsx';
import FooterBar from '../FooterBar.jsx';
function NotFoundPageView() {
	return (
		<>
			<NavBar />
			<h3>Page Not Found</h3>
			<h3>404</h3>
			<img src='./img\404_page-not-found.png' alt='PageNotFound' className='imgNotFound' />
			<FooterBar />
		</>
	);
}

export default NotFoundPageView;
