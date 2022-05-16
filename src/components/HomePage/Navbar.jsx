import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useWindowDimensions from "../Hooks/UseWindowDimensions";
import NavDesktop from "./Nav/NavDesktop";
import logo from "../../assets/logo-in.PNG";
import NavMobile from "./Nav/NavMobile";

const Navbar = () => {
    const { height, width } = useWindowDimensions();

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
                {
                    width > 950 ? <NavDesktop /> : <NavMobile />
                }
            </div>
        </header>
    );
};

export default Navbar;