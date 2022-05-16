import {Link} from "react-router-dom";

const NavDesktop = () => {
    return (
        <nav className="navbar__desktop">
            <Link to="/" className="navbar__item">STRONA GŁÓWNA</Link>
            <Link to="/about" className="navbar__item">O MNIE</Link>
            <Link to="/packages" className="navbar__item">PAKIETY</Link>
            <Link to="/blog" className="navbar__item">BLOG</Link>
            <Link to="/contact" className="navbar__item">KONTAKT</Link>
        </nav>
    );
};

export default NavDesktop;