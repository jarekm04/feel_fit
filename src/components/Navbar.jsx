import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/logo-in.PNG";

const Navbar = () => {
    const navigate = useNavigate();

    useEffect(() => { //only because of gh pages, package.json home is "feel_fit" not "/"
        if (window.location.href === "http://localhost:3000/feel_fit" || window.location.href === "https://jarekm04.github.io/feel_fit/") {
            navigate('/');
        }
    }, []);
    return (
        <header className="navbar">
            <div className="container">
                <Link to="/" className="navbar__logo">
                    <img src={logo} alt="logo" />
                </Link>
                <nav className="navbar__nav">
                    <Link to="/" className="navbar__item">STRONA GŁÓWNA</Link>
                    <Link to="/about" className="navbar__item">O MNIE</Link>
                    <Link to="/packages" className="navbar__item">PAKIETY</Link>
                    <Link to="/blog" className="navbar__item">BLOG</Link>
                    <Link to="/contact" className="navbar__item">KONTAKT</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;