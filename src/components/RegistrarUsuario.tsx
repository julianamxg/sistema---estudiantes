import { FunctionComponent } from "react";
import { TextField, Box, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export interface RegistrarUsuarioProps {
    handleClose: () => void;
}

export const RegistrarUsuario: FunctionComponent<RegistrarUsuarioProps> = ({ handleClose }) => {

    return (
        <>
            <Box component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'inherit',
                    background: '#fff',
                    margin: '5rem auto',
                    border: '1px solid rgb(224, 224, 224)',
                    padding: '2rem',
                    width: '50%'
                }}
                noValidate
                autoComplete="off"
            >
                <IconButton
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    sx={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <h2>Registrarse</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{
                                width: '100%',
                                mx: 'auto',
                            }}
                            type="text"
                            name="nombres"
                            id="filled-basic nombres"
                            variant="filled"
                            label='Nombres'
                            color="success"
                        ></TextField>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{
                                width: '100%',
                                mx: 'auto',
                            }}
                            type="text"
                            name="apellidos"
                            id="filled-basic apellidos"
                            variant="filled"
                            label='Apellidos'
                            color="success"
                        ></TextField>

                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            sx={{
                                width: '100%',
                                mx: 'auto',
                            }}
                            type="date"
                            name="fNacimiento"
                            id="filled-basic fNacimiento"
                            variant="filled"
                            label='Fecha de nacimiento'
                            color="success"
                        ></TextField>

                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            sx={{
                                width: '100%',
                                mx: 'auto',
                            }}
                            type="email"
                            name="correo"
                            id="filled-basic correo"
                            variant="filled"
                            label='Correo electronico'
                            color="success"
                        ></TextField>

                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            sx={{
                                width: '100%',
                                mx: 'auto',
                            }}
                            type="password"
                            name="password"
                            id="filled-basic password"
                            variant="filled"
                            label='Contraseña'
                            color="success"
                        ></TextField>
                    </Grid>
                </Grid>

                <Typography
                    variant="button"
                    component="a"
                    href='/inicio'
                    sx={{
                        display: { xs: 'flex', sm: 'flex' },
                        textDecoration: 'none',
                        color: '#fff',
                        background: 'linear-gradient(to bottom, rgb(46, 125, 50), rgb(46, 125, 91))',
                        height: '48px',
                        margin: '1rem auto',
                        width: '100px',
                        justifyContent: 'center',
                        alignItems: 'center',

                        '&:hover': {
                            background: 'linear-gradient(to bottom, rgb(46, 110, 40), rgb(46, 110, 81))',
                            transition: 'all 0.5s ease',
                        },
                    }}
                >
                    Ingresar
                </Typography>

            </Box>
        </>
    )
}