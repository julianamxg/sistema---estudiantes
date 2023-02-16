import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FunctionComponent } from "react";


export interface MenuSesionProps {
    handleOpen: () => void;
    handleOpenRegistro: () => void;
}

export const MenuSesion: FunctionComponent<MenuSesionProps> = ({ handleOpen, handleOpenRegistro }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',


        }}>
            <AppBar component="nav" sx={{
                background: 'transparent',
                display: 'flex',
                boxShadow: '0px 0px 1px 0px rgba(46,125,50,1)',
                padding: '3rem',
                flexDirection: 'row',
                alignItems: 'center'

            }}>
                <Typography
                    variant="h6"
                    component="a"
                    href='/'
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'flex', sm: 'flex' },
                        textDecoration: 'none',
                        color: '#fff',
                        fontWeight: 'bolder',
                        fontSize: '1.5rem',
                        marginRight: '2rem',

                    }}
                >
                    Systenotes
                </Typography>
                <Box sx={{
                    display: { xs: 'flex', sm: 'flex' },
                }}>
                    <Typography
                        variant="button"
                        component="button"
                        onClick={handleOpen}
                        type="button"
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            background: 'transparent',
                            color: '#fff',
                            border: 'none',
                            justifyContent: 'center',
                            margin: '0 0.3rem',
                            padding: '0.5rem 0.8rem',
                            cursor: 'pointer',
                            transition: 'all 0.5s ease',
                            '&:hover': {
                                background: '#ffffff14',
                            },
                        }}
                    >
                        Ingresar
                    </Typography>

                    <Typography
                        variant="button"
                        component="button"
                        onClick={handleOpenRegistro}
                        type="button"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', sm: 'flex' },
                            textDecoration: 'none',
                            background: 'transparent',
                            color: '#fff',
                            border: 'none',
                            justifyContent: 'center',
                            padding: '0.5rem 0.8rem',
                            margin: '0 0.3rem',
                            cursor: 'pointer',
                            transition: 'all 0.5s ease',
                            '&:hover': {
                                background: '#ffffff14',
                            },
                        }}
                    >
                        Registrarse
                    </Typography>
                </Box>
            </AppBar>
        </Box >
    )
}