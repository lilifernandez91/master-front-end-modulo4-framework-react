import React from "react";
import { RickAndMortyCardComponent } from "./components/card.component";
import { MemberDetail } from "./rickAndMorty.vm";
import "./rickAndMorty.styles.css";

interface Props {
  data: MemberDetail[];
}

export const RickAndMortyComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="rick-and-morty-container">
      <RickAndMortyCardComponent data={data} />
    </div>
  );
};
