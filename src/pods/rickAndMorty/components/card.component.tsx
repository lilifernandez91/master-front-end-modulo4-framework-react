import React, { useEffect, useState } from "react";
import { getRickAndMortyData } from "@/pods/rickAndMorty/api/api";
import CharacterFilter from "@/pods/rickAndMorty/components/characterFilter.component";

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

  return <CharacterFilter data={data} />;
};
