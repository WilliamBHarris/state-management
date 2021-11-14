import React, { useState, useContext } from "react";
import Movie from "./Movie";
import Nav from "./Nav";
import { MovieContext } from "./MovieContext";

const Movielist = () => {
    const [movies, setMovies] = useContext(MovieContext)
   return (
    <div className='movielist'>
        {movies.map(movie => (
            <Movie name={movie.name} price={movie.price} key={movies.id} />
        ))}
    </div>
  );
};

export default Movielist;
