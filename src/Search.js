import React from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <>
      <section className="search-section" id="search_section">
        <div>
          <h2 className="Search_heading d1">Search Your Favourite Movie</h2>
          <NavLink to="/favourite_movies" className="favourite d1">
            My favourite{" "}
            <span>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ fontSize: "20px", color: "red" }}
              />
            </span>
          </NavLink>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="search movie"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
          <div className="card-error">
            <p>{isError.show && isError.msg}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
