import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import MyFavorites from "./MyFavorites";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="favourite_movies" element={<MyFavorites />} />
    </Routes>
  );
};

export default App;
