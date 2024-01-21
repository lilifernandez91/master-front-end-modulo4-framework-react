import React from "react";
import { Link } from "react-router-dom";
import { Box, Fab } from "@mui/material";

export const GithubMembersVolverComponent: React.FC = () => {
  return (
    <Link className="table-link" to="/">
      <Box sx={{ m: 1 }}>
        <Fab color="primary" variant="extended">
          Volver a inicio
        </Fab>
      </Box>
    </Link>
  );
};
