import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MovieList from "./MovieList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <MovieList category="Trending Now" />
    </div>
  );
}

export default App;
