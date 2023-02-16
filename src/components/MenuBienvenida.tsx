import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const MenuBienvenida = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',

        }}>
            <AppBar component="nav" sx={{
                background: 'transparent',
                display: 'flex',
                boxShadow: '0px 0px 1px 0px rgba(46,125,50,1)',
                padding: '1rem'

            }}>
                <Toolbar>
                <Typography
                    variant="h6"
                    component="a"
                    href='/inicio'
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

                    <Typography
                        variant="subtitle1"
                        component="a"
                        href='/'
                        sx={{
                            margin: '1rem',
                            display: { xs: 'flex', sm: 'flex' },
                            textDecoration: 'none',
                            color: '#fff',
                            transition: 'all 0.5s ease',
                            '&:hover': {
                                color: '#ffffff9c',
                            },
                        }}
                    >
                        Cerrar sesión
                    </Typography>

                   
                </Toolbar>
            </AppBar>
        </Box>
    )
}