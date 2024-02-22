import React, { useState } from "react";
import { MemberDetailApi } from "@/pods/rickAndMorty/api/apiModel";
import { TextField } from "@mui/material";
import { ButtonComponent } from "@/common-app/components/button.component";
import { switchRoutes } from "@/router/routes";
import { useNavigate } from "react-router";

interface Props {
  data: MemberDetailApi[];
}

export const RickAndMortyCardComponent: React.FC<Props> = ({ data }) => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className="rick-and-morty-title">Personajes de Rick and Morty</h1>
      <div className="rick-and-morty-button">
        <ButtonComponent
          onClick={() => {
            navigate(switchRoutes.root);
          }}
          text="Volver"
        />
      </div>
      <div className="rick-and-morty-filter">
        <TextField
          id="standard-basic"
          label="Buscar personaje"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="rick-and-morty-cards">
        {filteredData.map((character) => (
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
    </>
  );
};

export default RickAndMortyCardComponent;
