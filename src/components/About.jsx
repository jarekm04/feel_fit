import {motion} from "framer-motion";

const About = () => {
    return (
        <motion.section
            className="about"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>O NAS</h1>
        </motion.section>
    );
};

export default About;