import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "auto",
  };
  const avatarStyle = { backgroundColor: "Primary" };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Grid item xs={12}>
        <Paper elevation={10} style={paperStyle}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item align="center">
              <Avatar style={avatarStyle}></Avatar>
              <h2>Iniciar Sesión</h2>
            </Grid>
            <form>
              <Grid item container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Usuario"
                    placeholder="Usuario"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Contraseña"
                    placeholder="Contraseña"
                    type="password"
                    fullWidth
                    required
                    autoComplete="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Recuerdame"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Iniciar sesión
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Typography>
                </Grid>
                <Grid item container xs={12} justifyContent="space-between">
                  <Typography>¿No tienes una cuenta?</Typography>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <Typography>Registrate aquí</Typography>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
