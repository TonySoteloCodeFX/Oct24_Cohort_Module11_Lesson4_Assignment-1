import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/characterList.css";
import { Link } from 'react-router-dom'; 

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const pageSize = 22; // <-----------------------This was awesome! 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
        );
        const results = response.data.results;

        const characterData = await Promise.all(
          results.map(async (character) => {
            const characterDetails = await axios.get(character.url);
            return {
              id: characterDetails.data.id,
              name: characterDetails.data.name,
              image: characterDetails.data.sprites.front_default,
            };
          })
        );

        setCharacters(characterData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch Pokémon. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [offset]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="char-main-container">
      <div className="logo"></div>
      <h2>Select a Pokémon!</h2>
      <div className="pokemon-grid">
        {characters.map((character) => (
          <Link to={`/pokemon/${character.id}`} key={character.id} className="pokemon-card-link">
            <div className="pokemon-card">
              <img src={character.image} alt={character.name} className="pokemon-image" />
              <p className="pokemon-name">{character.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setOffset(Math.max(0, offset - pageSize))} disabled={offset === 0}>
          Previous
        </button>
        <button onClick={() => setOffset(offset + pageSize)}>Next</button>
      </div>
    </div>
  );
};

export default CharacterList;