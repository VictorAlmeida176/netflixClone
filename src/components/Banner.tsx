import React, { useEffect, useState } from 'react';
import categories, { getMovies } from '../api';
import './Banner.css'
interface BannerProps {
    
}

const Banner: React.FC<BannerProps> = () => {
    
    const [movie, setMovie] = useState<any>({});

    const fetchRandomMovie = async()=>{
        try {

          const netflixOriginalsCategory = categories.find((category)=>category.name==='netflixOriginals')
            const data= await getMovies(netflixOriginalsCategory?.path)
            const randomIndex:number = Math.floor(Math.random() * 15);
            
            setMovie(data?.results[randomIndex])
          
            console.log(randomIndex)
        } catch (error) {
            console.log("error randomMovie", error)
        }
    }
    useEffect(() => {
            fetchRandomMovie();
    }, []);
    
    return (
        <header

        className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        
    }}>

      <div className='banner-content'>
        <h1 className='banner-title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner-buttons-container '>
          <button className='banner-button'>
            Assistir  
          </button>
          <button className='banner-button'>
              Minha lista
          </button>
        </div>
        <div className='banner-description '>
          {movie?.overview}
        </div>
      </div>


    </header>
    );
};

export default Banner;