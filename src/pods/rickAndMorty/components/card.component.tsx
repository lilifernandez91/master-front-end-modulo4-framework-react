import React, { useEffect, useState } from "react";
import { getRickAndMortyData } from "@/pods/rickAndMorty/api/api";
import CharacterFilter from "@/pods/rickAndMorty/components/characterFilter.component";
import { MemberDetailApi } from "@/pods/rickAndMorty/api/apiModel";

interface Props {
  data: MemberDetailApi[];
}

export const RickAndMortyCardComponent: React.FC<Props> = ({ data }) => {
  return <CharacterFilter data={data} />;
};
