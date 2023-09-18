import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useFavoriteContext } from "./FavoriteContext";

const imgUrl = "https://via.placeholder.com/200/200";

const MyFavorites = () => {
  const { favorites, removeFromFavorites } = useFavoriteContext(); // Access favorites and removeFromFavorites from context

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
        My Favorite Movies
      </h2>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {favorites.map((favorite) => {
            const { imdbID, Title, Poster } = favorite;
            const movieName = Title.substring(0, 15);

            return (
              <div id="MovieCard" key={imdbID}>
                <span>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="iconStyle"
                    onClick={() => removeFromFavorites(imdbID)} // Add to favorites
                  />
                </span>
                <NavLink>
                  <div className="card">
                    <div className="card-info">
                      <h2>
                        {movieName.length > 13 ? `${movieName}...` : movieName}
                      </h2>
                      <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>

      {/* <ul>
        {favorites.map((favorite) => (
          <li key={favorite.imdbID}>
            <span>{favorite.Title}</span>
            <button onClick={() => removeFromFavorites(favorite.imdbID)}>
              <FontAwesomeIcon icon={faTrash} className="iconStyle" />
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default MyFavorites;
