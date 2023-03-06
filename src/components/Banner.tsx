import React, { useEffect, useState } from 'react';
import categories, { getMovies } from '../api';
import './Banner.css'
interface BannerProps {
    
}

const Banner: React.FC<BannerProps> = () => {
    
    const [movie, setMovie] = useState<any>({});

    const fetchRandomMovie = async()=>{
        try {
            /* ******************** Erro na linha de baixo ******************** */
            const netflixOriginalsCategory = categories.find((category)=>category.name==='netflixOriginals')
            const data= await getMovies(netflixOriginalsCategory?.path)
            const randomIndex = Math.floor(Math.random()*data.results.lenght)
            setMovie(data?.results[randomIndex])
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
        // backgroundImage: `url("https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg")`,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        
      }}
    ></header>
    );
};

export default Banner;