import tableBg from "../../assets/IMG_3385.JPG";
import {BiCheckCircle} from "react-icons/bi";

const Packages = () => {
    return (
        <section
            className="packages"
        >
            <div className="packages__bg"></div>
            <div className="container">
                <h1 className="packages__title">PROGRAM MENTORING DIETETYCZNY</h1>
                <div className="packages__options">
                    <article className="packages__option">
                        <h3 className="option__name">STANDARD</h3>
                        <ul className="option__list">
                            <li><BiCheckCircle className="list__icon"/>1x indywidualna konsultacja dietetyczna online</li>
                            <li><BiCheckCircle className="list__icon"/>1 tydzień codziennego kontaktu za pośrednictwem aplikacji z analizą posiłków</li>
                        </ul>
                        <h4 className="option__price">150zł</h4>
                    </article>
                    <article className="packages__option">
                        <h3 className="option__name">PREMIUM</h3>
                        <ul className="option__list">
                            <li><BiCheckCircle className="list__icon"/>4x indywidualna konsultacja dietetyczna online</li>
                            <li><BiCheckCircle className="list__icon"/>1 miesiąc codziennego kontaktu za pośrednictwem aplikacji z analizą posiłków</li>
                            <br/>
                            <li><BiCheckCircle className="list__icon"/>Materiały edukacyjne z zadaniami do wykonania</li>
                            <br/>
                            <li><BiCheckCircle className="list__icon"/>Propozycje diety w razie potrzeby</li>
                        </ul>
                        <h4 className="option__price">350zł</h4>
                    </article>
                    <article className="packages__option">
                        <h3 className="option__name">SPECIAL</h3>
                        <ul className="option__list">
                            <li><BiCheckCircle className="list__icon"/>1 miesiąc kontaktu za pośrednictwem aplikacji z analizą posiłków*</li>
                            <li><p>*Oferta dla członków grupy "W trosce o siebie"</p></li>
                        </ul>
                        <h4 className="option__price">100zł</h4>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Packages;