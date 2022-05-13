import {motion} from "framer-motion";

const Blog = () => {
    return (
        <motion.section
            className="blog"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>BLOG</h1>
        </motion.section>
    );
};

export default Blog;