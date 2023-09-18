import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import "../src/Styles/Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useFavoriteContext } from "./FavoriteContext";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  const { addToFavorites } = useFavoriteContext();
  const [heartClicked, setHeartClicked] = useState([]);

  // Initialize the clicked state based on the length of the movie array
  useEffect(() => {
    if (movie) {
      setHeartClicked(Array(movie.length).fill(false));
    }
  }, [movie]);

  const handleHeartClick = (index) => {
    const updatedHeartClicked = [...heartClicked];
    updatedHeartClicked[index] = !updatedHeartClicked[index];
    setHeartClicked(updatedHeartClicked);
  };

  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie ? (
            movie.map((curMovieElem, index) => {
              const { imdbID, Title, Poster } = curMovieElem;
              const movieName = Title.substring(0, 15);

              return (
                <div id="MovieCard" key={imdbID}>
                  <span>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`iconStyle ${
                        heartClicked[index] ? "red-heart" : ""
                      }`}
                      onClick={() => {
                        addToFavorites(curMovieElem);
                        handleHeartClick(index);
                      }}
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
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })
          ) : (
            <p>No movies available.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Movie;
