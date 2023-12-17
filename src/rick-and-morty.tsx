import { Box, Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface ApiResponse {
  results: Character[];
}

export const RickAndMorty: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((json: ApiResponse) => {
        setData(json);
        console.log(json);
      });
  }, []);

  const showData = () => {
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

  const getBtn = () => {
    return (
      <Link className="table-link" to="/">
        <Box sx={{ m: 1 }}>
          <Fab color="primary" variant="extended">
            Volver a inicio
          </Fab>
        </Box>
      </Link>
    );
  };

  return (
    <>
      <h1 className="title-rick-and-morty">Personajes de Rick and Morty</h1>
      {showData()}
      {getBtn()}
    </>
  );
};
