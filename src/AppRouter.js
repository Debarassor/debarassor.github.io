import './App.scss';
import HeaderBar from './Elements/HeaderBar.js';
import ParralaxBackground from './ParralaxBackground.js';


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


        <h1>Le garde meuble</h1>

          <div className='Article'>


            <h2>
              Ce que l'ont fait
            </h2>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

            </p>

          

          </div>
        </div>
      </div>

    </div>
  );
}

export default AppRouter;
