import React from "react";
import { Link } from "react-router-dom";
import { Box, Fab, TextField, Typography } from "@mui/material";
import { GithubMembersFormEntity } from "../model/github-members-form-entity";

export const GithubMembersFormComponent: React.FC<GithubMembersFormEntity> = ({
  handleNavigation,
  username,
  setUsername,
}) => {
  return (
    <form className="form" onSubmit={handleNavigation}>
      <Typography sx={{ fontSize: "24px" }} variant="h1" gutterBottom>
        Filtrar por organización
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Organización"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="lemoncode, microsoft..."
        />
      </Box>
      <Box sx={{ m: 1 }}>
        <Fab color="success" variant="extended" type="submit">
          Buscar
        </Fab>
      </Box>
    </form>
  );
};
