import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const SignUpPage = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'primary' }
    const btnstyle = { margin: '0 5px', width: 290}
    const mrgnStyle = { margin: '8px 0'}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Registrarse</h2>
                    <Typography variant='caption' gutterBottom>Por favor llenar el formulario para registrarse</Typography>
                </Grid>
                <form>
                    <TextField style={mrgnStyle} fullWidth label='Nombre de usuario' placeholder="Nombre de usuario" />
                    <TextField style={mrgnStyle} type='email' fullWidth label='Email' placeholder="Ingrese su email" />
                    <TextField style={mrgnStyle} type='password' fullWidth label='Contraseña' placeholder="Contraseña"/>
                    <TextField style={mrgnStyle} type='password' fullWidth label='Confirmar contraseña' placeholder="Confirmar contraseña"/>
                    <Button style={btnstyle} type='submit' variant='contained' color='primary'>Registrarse</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUpPage;