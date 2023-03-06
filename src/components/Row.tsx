import React, { useEffect, useState } from 'react';
import { getMovies } from '../api';
import './Row.css'

interface RowProps {
    title:string,
    path:string,    
    isLarge:boolean;
}

const imageHost = 'https://image.tmdb.org/t/p/original/'

const Row: React.FC<RowProps> = ({title,path,isLarge}) => {
    
const [movies, setMovies] = useState<any[]>([]);    
const fetchMovies = async(_path: any)=>{
    try {
        const data = await getMovies(_path)
        console.log(data)
        setMovies(data?.results)
    } catch (error) {
        console.log("ERROR",error)
    }
};

    useEffect(() => {
        fetchMovies(path)
        },[path]);
    
    return (
        <div className='row-container'>
            <h2 className='row-header'>{title}</h2>
            <div className='row-cards'>{movies?.map(movie=>{
                
                return <img className={`movie-card ${isLarge && 'movie-card-large'}`} 
                key={movie.id}
                 src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`}
                alt={movie.name} />
            })}</div>
        </div>  
    );
};

export default Row;