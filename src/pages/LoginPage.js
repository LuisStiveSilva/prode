import { Grid, Paper, Avatar, TextField, Link, Button, Typography, FormControlLabel, Checkbox } from "@mui/material";

const LoginPage = () => {
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'Primary' }
    const btnstyle = { margin: '8px 0' }
    const mrgnStyle = { margin: '8px 0 0 0'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Iniciar Sesión</h2>
                </Grid>
                <TextField label='Usuario' placeholder='Usuario' fullWidth required/>
                <TextField label='Contraseña' placeholder='Contraseña' type='password' fullWidth required style={mrgnStyle}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Recuerdame"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Iniciar sesión</Button>
                <Typography >
                     <Link underline="none" href="#"> ¿Olvidaste tu contraseña? </Link>
                </Typography>
                <Typography > ¿No tienes una cuenta?
                    <Link underline="none" href='/signup'> Registrate aquí </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginPage