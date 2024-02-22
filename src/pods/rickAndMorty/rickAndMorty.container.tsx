import React, { useEffect, useState } from "react";
import { RickAndMortyComponent } from "@/pods/rickAndMorty/rickAndMorty.component";
import "@/pods/rickAndMorty/rickAndMorty.styles.css";
import { getRickAndMortyData, MemberDetailApi } from "./api";

export const RickAndMortyContainer: React.FC = () => {
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
      <RickAndMortyComponent data={data} />
    </div>
  );
};
