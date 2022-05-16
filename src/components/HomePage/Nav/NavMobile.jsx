import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {RiCloseLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const NavMobile = () => {
    const [sidebar, setSidebar] = useState(true);

    return (
        <div className="navbar__mobileBox">
            {!sidebar ? (
                <GiHamburgerMenu className="navbar__hamIcon" onClick={() => setSidebar(!sidebar)}/>
            ) : (
                <RiCloseLine className="navbar__closeIcon" onClick={() => setSidebar(!sidebar)}/>
            )
            }
            <nav className={sidebar ? "navbar__mobile" : "navbar__mobile isHidden"}>
                <Link to="/" className="navbar__item">STRONA GŁÓWNA</Link>
                <Link to="/about" className="navbar__item">O MNIE</Link>
                <Link to="/packages" className="navbar__item">PAKIETY</Link>
                <Link to="/blog" className="navbar__item">BLOG</Link>
                <Link to="/contact" className="navbar__item">KONTAKT</Link>
            </nav>
        </div>
    );
};

export default NavMobile;