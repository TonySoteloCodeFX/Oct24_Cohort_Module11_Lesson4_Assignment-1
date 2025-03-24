import React from "react";
import "../styles/characterDetails.css";

const CharacterDetails = ({ character }) => {
  if (!character) return <p style={{ textAlign: "center" }}>Select a Pokémon to see details.</p>;

  // I'm modifying the height and weight to make it look more proportionate if it was compared to a person.

  const NewHeight = character.height / 2;
  const NewWeight = character.weight / 2;

  return (
    <div className="pokemon-detail-card" style={{ textAlign: "center", margin: "auto", marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "250px" }}>
      <h2>{character.name.toUpperCase()}</h2>
      <img src={character.image} alt={character.name} style={{ width: "150px", height: "150px" }} />
      <p><strong>Base Experience:</strong> {character.base_experience}</p>
      <p><strong>Height:</strong> {NewHeight} ft.</p>
      <p><strong>Weight:</strong> {NewWeight} lbs.</p>
      <p><strong>Abilities:</strong> {character.abilities.join(", ")}</p>
    </div>
  );
};

export default CharacterDetails;