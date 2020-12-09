import React from "react";
import './Movie.scss';

const Movie = ({movie}) => {
    return <div className="movie">
        <h4>{movie.title}</h4>
        <h5>{movie.original_title}</h5>
        <p>Fecha estreno: {movie.release_date}</p>
        <img src={"http://image.tmdb.org/t/p/w200" + movie.poster_path} alt=""/>
        <p>Sinopsis: {movie.overview}</p>
        <p>Género: </p>
        <p>Nº votos: {movie.vote_count}</p>
    </div>
}
export default Movie;