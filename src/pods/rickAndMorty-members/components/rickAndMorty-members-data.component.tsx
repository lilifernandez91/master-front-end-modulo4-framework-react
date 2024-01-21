import React, { useState, useEffect } from "react";
import { ApiResponse } from "../../../core/model/api-response-entity";
import { fetchRickAndMortyData } from "../api/rickAndMorty-members-api";

export const RickAndMortyDataComponent: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await fetchRickAndMortyData();
        setData(jsonData);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rick-and-morty">
      {data?.results?.map((character) => (
        <div key={character.id} className="card-rick-and-morty">
          <img
            className="image-rick-and-morty"
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
