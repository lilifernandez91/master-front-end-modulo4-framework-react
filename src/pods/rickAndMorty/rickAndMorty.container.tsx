import React, { useEffect, useState } from "react";
import { RickAndMortyComponent } from "@/pods/rickAndMorty/rickAndMorty.component";
import "@/pods/rickAndMorty/rickAndMorty.styles.css";
import { ButtonComponent } from "@/common-app/components/button.component";
import { useNavigate } from "react-router";
import { switchRoutes } from "@/router/routes";
import { getRickAndMortyData } from "@/pods/rickAndMorty/api/api";
import { MemberDetailApi } from "@/pods/rickAndMorty/api/apiModel";

export const RickAndMortyContainer: React.FC = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<MemberDetailApi[]>([]);

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
      <RickAndMortyComponent data={data} />
    </div>
  );
};
