import React, { useEffect, useState } from "react";
import { getRickAndMortyData } from "@/pods/rickAndMorty/api/api";

export const RickAndMortyCardComponent: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRickAndMortyData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error al obtener datos de personajes:", error);
      });
  }, []);

  return (
    <div className="rick-and-morty-cards">
      {data.map((character) => (
        <div key={character.id} className="rick-and-morty-card">
          <img
            className="rick-and-morty-image"
            src={character.image}
            alt={character.name}
          />
          <h2>{character.name.split(" ").slice(0, 2).join(" ")}</h2>
          <p>
            Estado: {character.status !== "unknown" ? character.status : "-"}
          </p>
          <p>Especie: {character.species}</p>
          <p>
            Género: {character.gender !== "unknown" ? character.gender : "-"}
          </p>
        </div>
      ))}
    </div>
  );
};
