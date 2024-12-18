import React from "react";
import "./FavoriteList.css";
import { NavLink } from 'react-router-dom';
const FavoriteList = ({ favoriteList, inputValue }) => {
  return (
    <div className="favorite">
      <h1>Favorite Movies</h1>

      {favoriteList.length > 0 ? (
        <div className="favorite-list-container">
          <h2>{inputValue}</h2>
          {favoriteList.map((movie, index) => (
            <div className="favorite-item" key={index}>
              <p>{movie.title}</p>
              <button><a href={`https://www.imdb.com/title/${movie.imdbID}/`}>IMDB</a></button>
            </div>
          ))}
          
          <NavLink style={{color:'white'}} to="/">Home</NavLink>
        </div>
      ) : (
        <p>No favorite movies added.</p>
      )}
    </div>
  );
};

export default FavoriteList;
