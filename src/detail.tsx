import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id, orgName } = useParams<{ id: string; orgName: string }>();

  return (
    <>
      <h2>Detalle de un miembro de la organización</h2>
      <h3>Usuario: {id}</h3>
      <Link to={`/list/${orgName}`}>Volver</Link>
    </>
  );
};
