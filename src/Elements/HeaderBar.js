
import './HeaderBar.scss';



function HeaderBar() {

    return (

        <header className='HeaderNav'>
            <div class="navbar">
                <div class="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    )

}

function FooterBar() {

    return (


        <footer className='FooterBar'>
            <nav>
                <ul>
                    <p>2025</p>
                </ul>
            </nav>
        </footer>
    );

}

export { HeaderBar, FooterBar };


