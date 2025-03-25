import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom"; 
import "../styles/characterDetails.css";

const CharacterDetails = () => {
  const { id: routeId } = useParams(); 
  const [character, setCharacter] = useState(null);
  const [inputId, setInputId] = useState(routeId || "");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    if (routeId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${routeId}`);
          setCharacter(response.data);
          setError(""); 
        } catch (error) {
          if (error.response) {
            // This took forever!!!!!! I hate error handling!!!!!!!
            console.error("Error fetching Pokemon:", error.response.status, error.response.data);
            if (error.response.status === 404) {
              setError("Character not found.");
            } else {
              setError(`Error fetching character: ${error.response.status}`);
            }
          } else if (error.request) {
            
            console.error("Error fetching Pokemon: No response received");
            setError("Network error. Please check your connection.");
          } else {
            
            console.error("Error fetching Pokemon:", error.message);
            setError("An unexpected error occurred.");
          }
          setCharacter(null); 
        }
      };

      fetchData();
    }
  }, [routeId]);

  // Do you know how many Youtube videos I had to watch to get this right!!!!
  useEffect(() => {
    
    if (inputId) {
      navigate(`/pokemon/${inputId}`);
    }
  }, [inputId, navigate]);


  const handleInputChange = (e) => {
    const value = e.target.value;
    
    if (/^\d*$/.test(value)) {
      setInputId(value);
    }
  };


  if (!character && error) {
    return (
      <div className="pokemon-detail-card">
        <Link to="/browse">
          <button>Back</button>
        </Link>
        <p className="error-message">{error}</p>
        <input
          type="text"
          value={inputId}
          onChange={handleInputChange}
          placeholder="Enter Pokémon ID"
        />
      </div>
    );
  }

  if (!character) return <p>Loading...</p>;

  return (
    <div className="pokemon-detail-card">
      <Link to="/browse">
        <button>Back</button>
      </Link>
      <div className="main-card">
        <h2>{character.name.toUpperCase()}</h2>
        <img src={character.sprites.front_default} alt={character.name} />
        <p>
          <strong>Base Experience:</strong> {character.base_experience}
        </p>
        <p>
          <strong>Height:</strong> {character.height / 2} ft
        </p>
        <p>
          <strong>Weight:</strong> {character.weight / 2} lbs
        </p>
        <p>
          <strong>Abilities:</strong> {character.abilities.map((ability) => ability.ability.name).join(", ")}
        </p>
      </div>
      <h3>Enter Pokémon ID</h3>
      <input
        type="text"
        value={inputId}
        onChange={handleInputChange}
        placeholder="Enter Pokémon ID"
      />
    </div>
  );
};

export default CharacterDetails;