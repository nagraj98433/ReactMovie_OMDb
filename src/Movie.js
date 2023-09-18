import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import "../src/Styles/Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import MyFavorites from "./MyFavorites"; // Import the MyFavorites component
import { useFavoriteContext } from "./FavoriteContext"; // Import the context hook

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  const { addToFavorites } = useFavoriteContext(); // Access addToFavorites from context

  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);

                return (
                  <div id="MovieCard" key={imdbID}>
                    <span>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="iconStyle"
                        onClick={() => addToFavorites(curMovieElem)} // Add to favorites
                      />
                    </span>
                    <NavLink to={`movie/${imdbID}`}>
                      <div className="card">
                        <div className="card-info">
                          <h2>
                            {movieName.length > 13
                              ? `${movieName}...`
                              : movieName}
                          </h2>
                          <img
                            src={Poster === "N/A" ? imgUrl : Poster}
                            alt="#"
                          />
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })
            : ""}
        </div>
      </section>

      {/* Display the MyFavorites component */}
      {/* <MyFavorites favorites={favorites} setFavorites={setFavorites} /> */}
    </>
  );
};

export default Movie;
