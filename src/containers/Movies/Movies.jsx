import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie'
import './Movies.scss';

const Movies = props =>{
    const movieType = props.match.params.movieType;
    const [movies,setMovies] = useState([])
    let url = '';
    if(movieType === 'popular'){
        url = `https://api.themoviedb.org/3/movie/${movieType}?api_key=f6c510b3b52b2f6efd5ed11ca30c9c4d&language=es-ES`;
    }
        useEffect(()=>{
            axios.get(url)
            .then(res => setMovies(res.data.results))
            .catch(console.error)
        },[movieType])

    return <div className="movies">
        {movies?.map(movie=><Movie key={movie.id} movie={movie}/>)}
    </div>
}

export default Movies;