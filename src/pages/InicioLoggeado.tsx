import Box from '@mui/material/Box';
import { Grid, Icon, IconButton, Link, Modal, Typography } from "@mui/material";
import { MenuSesion } from "../components/MenuSesion";
import { InicioSesion } from "../components/InicioSesion";
import React from "react";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import { RegistrarUsuario } from "../components/RegistrarUsuario";
import { MenuPrincipal } from '../components/MenuPrincipal';
import { MenuBienvenida } from '../components/MenuBienvenida';

function InicioLoggeado() {
    return (
        <>
            <MenuBienvenida />
            <Box sx={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
                backgroundposition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                width: '100%',
                height: '657px'
            }}>
                <Box sx={{

                    background: 'linear-gradient(to bottom, rgba(46, 125, 50, 10), rgba(46, 125, 91, 0.90))',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Grid container spacing={3} sx={{
                        display: { xs: 'flex', sm: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        textAlign: 'center',
                        width: 'calc(80% + 0px)',
                        color: '#317e3b'
                    }}>
                         <Link href='/estudiantes' sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '24%',
                            background: '#fff',
                            margin: '0.5rem',
                            height: '168px',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            color: '#317e3b'


                        }}>
                        <Grid item sm={3} xs={12} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '24px',
                            background: '#fff',
                            margin: '0.5rem',
                            height: '168px',
                            justifyContent: 'center'
                        }}>
                            <Icon>
                                <SchoolOutlinedIcon />
                            </Icon>
                            Estudiantes
                        </Grid>
                        </Link>
                        <Link href='/materias' sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '24%',
                            background: '#fff',
                            margin: '0.5rem',
                            height: '168px',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            color: '#317e3b'


                        }}>
                            <Grid item xs={12} sm={3} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '24px',
                                background: '#fff',
                                margin: '0.5rem',
                                height: '168px',
                                justifyContent: 'center',

                            }}>
                                <Icon
                                    color="inherit"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'end'
                                    }}
                                >
                                    <AutoStoriesOutlinedIcon />
                                </Icon>
                                Materias
                            </Grid>
                        </Link>

                        <Link href='/notas' sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '24%',
                            background: '#fff',
                            margin: '0.5rem',
                            height: '168px',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            color: '#317e3b'


                        }}>
                            <Grid item xs={12} sm={3}>

                                <Icon >
                                    <ClassOutlinedIcon />
                                </Icon>

                                Notas
                            </Grid>
                        </Link>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default InicioLoggeado;
