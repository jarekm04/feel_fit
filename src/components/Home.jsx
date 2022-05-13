import {motion} from "framer-motion";
import homePhoto from "../assets/E0A9540_min.jpg";

const Home = () => {
    return (
        <motion.section
            className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <img src={homePhoto} alt="homePhoto" className="home__bg"/>
        </motion.section>
    );
};

export default Home;