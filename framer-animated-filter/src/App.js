// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Movie from './Movie';
import Filter from './Filter';
import { motion , AnimatePresence} from "framer-motion";

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);


  const fetchPopular = async () => {
    for(let loop = 1 ; loop < 10 ; loop ++){
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=34163d7ea9fbd06f7babbb2ce6e7363d&language=en-US&page="+loop);    
      const movies = await data.json();
      setPopular((popular)=>{
        return[...popular , ...movies.results]
      });

      setFiltered((filtered)=>{
        return [...filtered , ...movies.results];
      });
    }
  };

  return (
    <div className='App'>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre }/>
      <motion.div layout className='popular-movies'>
        <AnimatePresence>
        {filtered.map((movie) => { 
          return <Movie key={movie.id} movie={movie}/>;
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
