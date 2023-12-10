import NavBar from '../NavBar.jsx';
import FooterBar from '../FooterBar.jsx';
import TitleContainer from '../components/TitleContainer.jsx';
function ContactView() {
	return (
		<>
			<NavBar />
			<TitleContainer />
			<div>
				<h2>We are here for you!!! </h2>
				<p>
					The moment to plan your <b>amazing avacations in Amarante</b> has arrive! <br /> Send us a message to plan your days or just to receive information about the city, monuments, activities and
					much more. <br />
					<b>#DiscoverWithLocals</b>
				</p>
				<form action='' method='post'>
					<div className='nameContactForm'>
						<label for='name'>Name:</label>
						<input type='text' id='nome' name='name' placeholder='First and Last name' />
					</div>
					<div className='emailPhoneContactForm'>
						<label for='email'>Email:</label>
						<input type='email' id='email' name='email' placeholder='email' />
						<label for='phoneNumberphone'>Phone:</label>
						<input type='phoneNumberphone' id='phoneNumberphone' name='phoneNumber' placeholder='Phone Number' />
					</div>
					<div className='DateContactForm'>
						<label for='startDate'>From:</label>
						<input type='date' id='startDate' name='startDate' />
						<label for='endDate'>To:</label>
						<input type='date' id='endDate' name='endDate' />
					</div>
					<div className='textBoxContactForm'>
						<label for='mensagem'>Your Message:</label>
						<textarea id='message' name='message' rows='4' cols='50' placeholder='Write here your message'></textarea>
					</div>
					<input type='submit' value='Send' />
				</form>
				<div className='asideInfo'>
					<h5>
						Phone number:
						<br />
						+351 918 409 757
					</h5>
					<h5>
						Email:
						<br />
						amaranteexperiences@outlook.com
					</h5>
				</div>
			</div>
			<FooterBar />
		</>
	);
}

export default ContactView;
