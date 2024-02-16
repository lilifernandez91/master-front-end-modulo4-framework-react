import React from "react";
import { RickAndMortyComponent } from "@/pods/rickAndMorty/rickAndMorty.component";
import "@/pods/rickAndMorty/rickAndMorty.styles.css";
import { ButtonComponent } from "@/common-app/components/button.component";
import { useNavigate } from "react-router";
import { switchRoutes } from "@/router/routes";

export const RickAndMortyContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="rick-and-morty-container">
      <h1 className="rick-and-morty-title">Personajes de Rick and Morty</h1>
      <div className="rick-and-morty-button">
        <ButtonComponent
          onClick={() => {
            navigate(switchRoutes.root);
          }}
          text="Volver"
        />
      </div>
      <RickAndMortyComponent />
    </div>
  );
};
