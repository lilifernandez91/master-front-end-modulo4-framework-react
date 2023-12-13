import { useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("Lemoncode");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lowercaseUsername = username.toLowerCase();

    if (
      lowercaseUsername === "lemoncode" ||
      lowercaseUsername === "microsoft"
    ) {
      navigate(`/list/${lowercaseUsername}`);
    } else {
      showModal();
    }
  };

  const getForm = () => {
    return (
      <>
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
            label={username}
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box sx={{ m: 1 }}>
          <Fab color="success" variant="extended" type="submit">
            Buscar
          </Fab>
        </Box>
      </>
    );
  };

  const getModal = () => {
    return (
      <>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Atención
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              Nombre de la organización incorrecto
            </Typography>
          </DialogContent>
        </BootstrapDialog>
      </>
    );
  };

  return (
    <div className="form-content">
      <form className="form" onSubmit={handleNavigation}>
        {getForm()}
      </form>
      {getModal()}
    </div>
  );
};
