import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/router/routes";
import "@/pods/home/home.styles.css";

export const HomeComponent: React.FC = () => {
  const goToApiorganization = () => {
    return (
      <Stack spacing={2} direction="row">
        <Link to={switchRoutes.organization}>
          <Button variant="outlined" className="init-btn">
            Buscar por organización
          </Button>
        </Link>
      </Stack>
    );
  };

  const goToApiRichAndMorty = () => {
    return (
      <Stack spacing={2} direction="row">
        <Link to={switchRoutes.rickAndMorty}>
          <Button variant="outlined" className="init-btn">
            Buscar personajes de Rick and Morty
          </Button>
        </Link>
      </Stack>
    );
  };

  return (
    <div className="api">
      {goToApiorganization()}
      {goToApiRichAndMorty()}
    </div>
  );
};
