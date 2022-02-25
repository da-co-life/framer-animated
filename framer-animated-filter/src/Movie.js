import { motion } from "framer-motion";

function Movie({ movie }) { 
    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
            <h2>{movie.title}</h2>
            <img src={"https://image.tmdb.org/t/p/w400" + movie.backdrop_path} alt =""/>
        </motion.div>
    );
}

export default Movie;