import React from "react";
import { RickAndMortyCardComponent } from "@/pods/rickAndMorty/components/card.component";
import { MemberDetailApi } from "@/pods/rickAndMorty/api/apiModel";

interface Props {
  data: MemberDetailApi[];
}

export const RickAndMortyComponent: React.FC<Props> = ({ data }) => {
  return <RickAndMortyCardComponent data={data} />;
};
