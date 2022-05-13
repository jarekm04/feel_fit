import {motion} from "framer-motion";

const Home = () => {
    return (
        <motion.section
            className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>HOMEPAGE</h1>
        </motion.section>
    );
};

export default Home;