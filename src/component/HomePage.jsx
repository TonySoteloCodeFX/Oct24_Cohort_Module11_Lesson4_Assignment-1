// HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/homePage.css";
import "../styles/global.css"; // <----------- This was pretty neat! 

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="logo"></div>
      <h2>Gotta Catch 'Em All!</h2>
      <Link to="/browse">
        <button className="cta-button">Browse Pokémon</button>
      </Link>
    </div>
  );
};

export default HomePage;