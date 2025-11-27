import React, { useState, useEffect } from "react";
import "./TopRated.css";
import MovieCard from "./MovieCard";

const TopRated = () => {
  //state variable
  //do this after fetching the data
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  });
  //this is a custom function that will get the movies from TMDB
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=5943505ca13a74525106eff423ee3c76"
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);
  };


  return (
    <div className="top_grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TopRated;