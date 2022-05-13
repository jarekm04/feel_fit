import {Link} from "react-router-dom";
import logo from "../assets/logo-in.PNG";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container">
                <Link to="/" class="navbar__logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <nav className="navbar__nav">
                    <Link to="/" class="navbar__item">STRONA GŁÓWNA</Link>
                    <Link to="/about" class="navbar__item">O MNIE</Link>
                    <Link to="/blog" class="navbar__item">BLOG</Link>
                    <Link to="/contact" class="navbar__item">KONTAKT</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;