import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "@/pods/github-list/github-list.styles.css";
import { ButtonComponent } from "@/common-app/components";
import { getGithubData, GitHubUserApi } from "@/pods/github-list/api";
import {
  GithubListModalComponent,
  GithubListTableComponent,
} from "@/pods/github-list/components";

export const FormComponent: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [orgData, setOrgData] = useState<GitHubUserApi[] | null>(null);

  const handleClick = () => {
    if (organizationName) {
      getGithubData(organizationName)
        .then((responseData) => {
          setOrgData(responseData);
          setOpenModal(true);
        })
        .catch((error) => {
          console.error("Error al obtener datos de la organización:", error);
        });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganizationName(event.target.value);
  };

  return (
    <form className="form">
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
          placeholder="lemoncode, microsoft..."
          value={organizationName}
          onChange={handleInputChange}
        />
      </Box>
      <ButtonComponent onClick={handleClick} text="Buscar" />
      {orgData ? (
        <GithubListTableComponent data={orgData} />
      ) : (
        openModal && <GithubListModalComponent data={orgData} />
      )}
    </form>
  );
};
