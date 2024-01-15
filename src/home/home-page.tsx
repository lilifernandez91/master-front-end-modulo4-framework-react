import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./home-page.styles.css";

export const Inicio: React.FC = () => {
  const goToApiorganization = () => {
    return (
      <Stack spacing={2} direction="row">
        <Link to="/github-members">
          <Button variant="outlined" className="init-btn">
            Ir a API de Organización
          </Button>
        </Link>
      </Stack>
    );
  };

  const goToApiRichAndMorty = () => {
    return (
      <Stack spacing={2} direction="row">
        <Link to="/rick-and-morty-members">
          <Button variant="outlined" className="init-btn">
            Ir a API de Rick and Morty
          </Button>
        </Link>
      </Stack>
    );
  };

  return (
    <div className="init">
      <div className="api">
        {goToApiorganization()}
        {goToApiRichAndMorty()}
      </div>
    </div>
  );
};
