import React from "react";
import { Link } from "react-router-dom";
import { Box, Fab } from "@mui/material";

export const GithubMembersListVolverComponent: React.FC = () => {
  return (
    <Link className="table-link" to="/github-members">
      <Box sx={{ m: 1 }}>
        <Fab color="primary" variant="extended">
          Volver
        </Fab>
      </Box>
    </Link>
  );
};
