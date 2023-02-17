import Box from '@mui/material/Box';
import { Grid, Icon, Modal, Typography } from "@mui/material";
import { MenuSesion } from "../components/MenuSesion";
import { InicioSesion } from "../components/InicioSesion";
import React from "react";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import { RegistrarUsuario } from "../components/RegistrarUsuario";

function Inicio() {
    const [open, setOpen] = React.useState(false);
    const [openRegistro, setOpenRegistro] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

    const handleOpenRegistro = () => {
        setOpenRegistro(!openRegistro)
    };
    return (
        <>
            < MenuSesion handleOpen={handleOpen} handleOpenRegistro={handleOpenRegistro}/>
            <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    overflowY: 'scroll'
                }}
            >
                <Box>
                    <InicioSesion handleClose={handleOpen} />
                </Box>
            </Modal>
            <Modal
                open={openRegistro}
                onClose={handleOpenRegistro}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <RegistrarUsuario handleClose={handleOpenRegistro} />
                </Box>
            </Modal>
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
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '11rem auto 0rem auto',
                            textAlign: 'center',
                            fontSize: '3rem',
                            width: '80%',
                            flexDirection: 'column'

                        }}
                    >
                        Sistema de información de estudiantes
                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: '#fff',
                                fontSize: '1.5rem',
                                margin: '1rem '

                            }}
                        >
                            Bienvenido, lleva un registro de las calificaciones de tus alumnos con nuestro sistema de información
                        </Typography>
                    </Typography>
                    <Grid container spacing={3} sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '3rem auto 0rem auto',
                        textAlign: 'center',
                        width: 'calc(80% + 0px)',
                        color: '#317e3b'
                    }}>
                        <Grid item sm={3} xs={12} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '24px',
                            background: '#fff',
                            margin: '0.5rem'
                        }}>
                            <Icon>
                                <SchoolOutlinedIcon  />
                            </Icon>
                            Estudiantes
                        </Grid>
                        <Grid item xs={12} sm={3} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '24px',
                            background: '#fff',
                            margin: '0.5rem'
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
                        <Grid item xs={12} sm={3}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '24px',
                                background: '#fff',
                                margin: '0.5rem'

                            }}>
                            <Icon
                                color="inherit"
                            >
                                <ClassOutlinedIcon />
                            </Icon>
                            Notas
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default Inicio;
