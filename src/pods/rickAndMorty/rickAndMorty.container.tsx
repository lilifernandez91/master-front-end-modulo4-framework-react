import React, { useEffect, useState } from "react";
import { RickAndMortyComponent } from "./rickAndMorty.component";
import { getRickAndMortyData } from "./api";
import { mapMemberListFromApiToVm } from "./rickAndMorty.mappers";
import { MemberDetail } from "./rickAndMorty.vm";

export const RickAndMortyContainer: React.FC = () => {
  const [data, setData] = useState<MemberDetail[]>([]);

  useEffect(() => {
    getRickAndMortyData()
      .then((responseData) => {
        setData(mapMemberListFromApiToVm(responseData));
      })
      .catch((error) => {
        console.error("Error al obtener datos de personajes:", error);
      });
  }, []);

  return <RickAndMortyComponent data={data} />;
};
