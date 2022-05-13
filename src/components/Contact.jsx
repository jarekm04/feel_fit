import {motion} from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            className="contact"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>KONTAKT</h1>
        </motion.section>
    );
};

export default Contact;