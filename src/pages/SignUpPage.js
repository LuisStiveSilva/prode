import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const SignUpPage = () => {
  const paperStyle = { padding: "20px", width: 300, margin: "auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "primary" };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Paper elevation={20} style={paperStyle}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Registrarse</h2>
            <Typography variant="caption" gutterBottom>
              Por favor llenar el formulario para registrarse
            </Typography>
          </Grid>
          <Grid item>
            <form>
              <Grid item container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nombre de usuario"
                    placeholder="Nombre de usuario"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    fullWidth
                    label="Email"
                    placeholder="Ingrese su email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    fullWidth
                    label="Contraseña"
                    placeholder="Contraseña"
                    autoComplete="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    fullWidth
                    label="Confirmar contraseña"
                    placeholder="Confirmar contraseña"
                    autoComplete="newPassword"
                  />
                </Grid>
                <Grid item container xs={12} justifyContent="center">
                  <Button type="submit" variant="contained" color="primary">
                    Registrarse
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignUpPage;
