import { useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("Lemoncode");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lowercaseUsername = username.toLowerCase();

    if (
      lowercaseUsername === "lemoncode" ||
      lowercaseUsername === "microsoft"
    ) {
      navigate(`/list/${lowercaseUsername}`);
    } else {
      alert("Organización incorrecta");
    }
  };

  return (
    <div className="form-content">
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
      </form>
    </div>
  );
};
