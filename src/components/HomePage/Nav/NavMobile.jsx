import {useState} from "react";
import {Link} from "react-router-dom";
import {GiOpenBook} from "react-icons/gi";
import {AiOutlineDoubleLeft} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import {FaHome} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {ImPriceTags} from "react-icons/im";

const NavMobile = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="navbar__mobileBox">
            {!sidebar ? (
                <AiOutlineDoubleLeft className="navbar__openIcon" onClick={() => setSidebar(!sidebar)}/>
            ) : (
                <RiCloseLine className="navbar__closeIcon" onClick={() => setSidebar(!sidebar)}/>
            )
            }
            <nav className={sidebar ? "navbar__mobile" : "navbar__mobile isHidden"}>
                <Link to="/" className="navbar__item">
                    <FaHome className="navbar__icon"/>
                    <p>STRONA GŁÓWNA</p>
                </Link>
                <Link to="/about" className="navbar__item">
                    <BsFillPersonFill className="navbar__icon"/>
                    <p>O MNIE</p>
                </Link>
                <Link to="/packages" className="navbar__item">
                    <ImPriceTags className="navbar__icon"/>
                    <p>PAKIETY</p>
                </Link>
                <Link to="/blog" className="navbar__item">
                    <GiOpenBook className="navbar__icon"/>
                    <p>BLOG</p>
                </Link>
                <Link to="/contact" className="navbar__item">
                    <GrMail className="navbar__icon"/>
                    <p>KONTAKT</p>
                </Link>
            </nav>
        </div>
    );
};

export default NavMobile;