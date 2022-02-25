import { motion } from "framer-motion";

function Movie({ photo }) {
    return (
        <motion.div className='item' key={photo.id}>
            <img src={photo.urls.raw} alt="" />
        </motion.div>
    );
}

export default Movie;