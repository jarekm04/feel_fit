import {Link} from "react-router-dom";
import homePhoto1 from "../assets/selerLONG.jpg";
import homePhoto2 from "../assets/gretaCutted2.png";

const Home = () => {
    return (
        <section
            className="home"
        >
            <img src={homePhoto1} alt="homePhoto" className="home__bg-1"/>
            <img src={homePhoto2} alt="homePhoto" className="home__bg-2"/>
            <div className="container">
                <div className="home__opening">
                    <h1 className="home__title">"To dieta ma być dopasowana do człowieka, a nie człowiek do diety"</h1>
                    <h3 className="home__subtitle">Anna Podlewska, Feel Fit</h3>
                    <div className="home__buttons">
                        <Link to="/packages" className="home__btn">Sprawdź pakiety</Link>
                        <Link to="/blog" className="home__btn">Czytaj Blog</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;