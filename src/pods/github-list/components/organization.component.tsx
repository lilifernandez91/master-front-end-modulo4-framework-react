import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ButtonComponent } from "@/common-app/components/button.component";
import { switchRoutes } from "@/router/routes";
import { GithubListModalComponent } from "../components/modal.component";

export const OrganizationComponent: React.FC = () => {
  const navigate = useNavigate();
  const [organization, setOrganization] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleOrganizationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrganization(event.target.value);
  };

  const handleSearch = () => {
    if (organization === "") {
      setOpenModal(true);
    } else {
      navigate(`${switchRoutes.githubList}/${organization}`);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
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
            onChange={handleOrganizationChange}
          />
        </Box>
        <div className="form-btn">
          <ButtonComponent
            onClick={() => {
              navigate(switchRoutes.root);
            }}
            text="Volver"
          />
          <ButtonComponent
            onClick={handleSearch}
            text="Buscar"
            color="primary"
          />
        </div>
      </form>
      <GithubListModalComponent
        open={openModal}
        handleClose={handleCloseModal}
      />
    </>
  );
};
