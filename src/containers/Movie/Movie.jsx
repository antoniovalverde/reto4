import React from "react";
import './Movie.scss';

const Movie = /*({movie})*/props => {

    let generos = props.movie.genre_ids;

    let total_generos = '';

    let j=0;

    for(let i=0;i<props.list.length;i++){
        for(j=0; j<generos.length;j++){
            if(props.list[i].id === generos[j]){
                total_generos += props.list[i].name + ' - ';
            }
        }
        j=0;
    }

    console.log(props.list)
    console.log(generos)

    return <div className="movie">
        <h4>{props.movie.title}</h4>
        <h5>{props.movie.original_title}</h5>
        <p>Fecha de lanzamiento: {props.movie.release_date}</p>
        <img src={"http://image.tmdb.org/t/p/w200" + props.movie.poster_path} alt=""/>
        <p>Sinopsis: {props.movie.overview}</p>
        <p>Género: {total_generos}</p>
        <p>Nº votos: {props.movie.vote_count}</p>
    </div>
}
export default Movie;