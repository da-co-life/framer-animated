import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import { motion } from "framer-motion";
import { useRef , useEffect, useState } from "react";


function App() {

  const [popular, setPopular] = useState([]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  
  useEffect(() => {
    fetchPopular();
    console.log("Width :: " + carousel.current.scrollWidth);
    console.log("offsetWidth :: " + carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    console.log("carousel.current.scrollWidth :: " + carousel.current.scrollWidth);
    console.log("carousel.current.offsetWidth :: " + carousel.current.offsetWidth);

  }, []);


  const fetchPopular = async () => {
    const data = await fetch("https://api.unsplash.com/photos/?client_id=_4Q1u6wAX_dFY_fq7NCJytv8wjpfV93MWpk62Zo2dxg");
    const photo = await data.json();
    setPopular(photo);    
  };

  return (
    <div className='App'>
      <motion.div ref={carousel} className='carousel'>
         <motion.div
          drag="x"
          dragConstraints={{ right: 0 , left: -width}}
          className='inner-carousel' >
          {popular.map((photo) => { 
            console.log("photo :" + photo);
            return <Movie key={photo.id} photo={photo} />;
          }
            )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
