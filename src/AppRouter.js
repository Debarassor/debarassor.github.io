import './App.scss';
import {HeaderBar, FooterBar} from './Elements/HeaderBar.js';
import ParralaxBackground from './Elements/ParralaxBackground.js';
import BeforeAfterSlider from './Elements/BeforeAfterSlider.js';


function AppRouter() {

	return (

		<div className="App">




			<div className='App-area'>

			

				<ParralaxBackground />
				<div className="background">
					<img src="/images/chaucoBg.jpg" alt="backgroundImg" />
				</div>

				<HeaderBar />


				<div className='App-body'>

					<h1>Braquet déménagement</h1>
					<em>Service gratuit à domicile</em>

				<BeforeAfterSlider />

					<div className='Article'>
						<div className='Article-HorizontalBox'>

							<img src="/images/chauco1.jpg" alt="chauconin" className='Article-ImgGrow1' />
							<div className='Article-TextBox'>
								<h2>
									Service proposé
								</h2>
								<p>
									Nous vidons gratuitement maisons,
									greniers et appartements, en donnant
									une seconde vie aux objets récupérés.
									Gérant nous même un musée, nous sommes capable 
									d'itentifier des objets ayant une valeur historique
									afin des les valoriser et de les placer dans des collections.
									Le reste est soigneusement trié : une partie est
									confiée aux ressourceries ou recyclée, une autre
									proposée à la vente. Un service utile, écologique
									et respectueux du patrimoine.
								</p>
							</div>

						</div>


					</div>			

				</div>

				<FooterBar />

			</div>

		</div>
	);
}

export default AppRouter;
