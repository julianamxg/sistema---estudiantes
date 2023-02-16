import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const MenuPrincipal = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',

        }}>
            <AppBar component="nav" sx={{
                background: 'rgb(46,125,50)',
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
                            transition: 'all 0.5s ease',
                            '&:hover': {
                                color: '#ffffff9c',
                            },
                        }}
                    >
                        <FontAwesomeIcon icon={faHouseChimney} />
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        component="a"
                        href='/materias'
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
                        Materias
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        component="a"
                        href='/estudiantes'
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
                        Estudiantes
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        component="a"
                        href='/notas'
                        sx={{
                            margin: '1rem',
                            flexGrow: -1,
                            display: { xs: 'flex', sm: 'flex' },
                            textDecoration: 'none',
                            color: '#fff',
                            transition: 'all 0.5s ease',
                            '&:hover': {
                                color: '#ffffff9c',
                            },
                        }}
                    >
                        Notas
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}