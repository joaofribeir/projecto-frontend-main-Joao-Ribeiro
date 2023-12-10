import NavBar from '../NavBar.jsx';
import FooterBar from '../FooterBar.jsx';
import TitleContainer from '../components/TitleContainer.jsx';
function CardInfo() {
	return (
		<>
			<NavBar />
			<TitleContainer />

			<div className='CardTitle'>
				<h1>titulo</h1>
				<h4>13-03-2020</h4>
				<img src='/img/slide_4.JPG' alt='' />
			</div>
			<div>
				<p>
					mapa <img src='https://www.oficinadanet.com.br/media/post/27852/750/adicionar-parada.jpg' alt='mapa' />
				</p>
				<section>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, facere pariatur nemo perferendis animi doloremque repellendus itaque aperiam non molestiae ex iste, eos a qui possimus
							aspernatur ad? Quae, a.
						</p>
					</div>
					<div>
						<img src='../img/joao.png' alt='tempo' />
					</div>
				</section>
			</div>

			<FooterBar />
		</>
	);
}

export default CardInfo;
