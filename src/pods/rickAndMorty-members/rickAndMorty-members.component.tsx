import React from "react";
import { RickAndMortyVolverComponent } from "./components/rickAndMorty-members-volver.component";
import { RickAndMortyDataComponent } from "./components/rickAndMorty-members-data.component";
import "./rickAndMorty-members.styles.css";

export const RickAndMortyComponent: React.FC = () => {
  return (
    <>
      <h1 className="title-rick-and-morty">Personajes de Rick and Morty</h1>
      <RickAndMortyVolverComponent />
      <RickAndMortyDataComponent />
    </>
  );
};
