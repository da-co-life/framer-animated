import { useEffect } from "react"; 

function Filter({ popular, setFiltered, activeGenre, setActiveGenre }) { 
    
    useEffect(() => {
        if (activeGenre === 0) { 
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => 
            movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);
    }, [activeGenre]);


    return (

        <div className='filter-container'>
            <button className={ activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
            <button className={activeGenre === 12 ? "active" : ""} onClick={() => setActiveGenre(12)}>Adventure</button>
            <button className={activeGenre === 16 ? "active" : ""} onClick={() => setActiveGenre(16)}>Animation</button>
            <button className={activeGenre === 10402 ? "active" : ""} onClick={() => setActiveGenre(10402)}>Music</button>
            <button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>Action</button>
            
        </div>
    ); 
}

export default Filter;