import React from "react";
import "./MovieList.css";

const movies = [
  "violence.jpeg",
  "pathuthala.jpeg",
  "avatar.jpeg",
  "sundarapandian.jpeg",
  "pirates.jpeg",
  "wonderwoman.jpeg",
  "once.jpeg",
  "deadpool.jpeg",
  "joker.jpeg"
];

function MovieList({ category }) {
  return (
    <div className="movie-list">
      <h2>{category}</h2>
      <div className="movie-row">
        {movies.map((movie, index) => (
          <a key={index} href="#">
            <img src={movie} alt="Movie Poster" className="movie-thumbnail" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
