import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const MenuPrincipal = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent:'space-between'
        }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                background: '#53BE76',
                display: 'flex',
                
            }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="a"
                        href='/'
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', sm: 'flex' },
                            textDecoration: 'none',
                            color: '#fff'
                        }}
                    >
                        <FontAwesomeIcon icon={faHouseChimney} />
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        component="a"
                        href='/materias'
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', sm: 'flex' },
                            textDecoration: 'none',
                            color: '#fff'
                        }}
                    >
                       Materias
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        component="a"
                        href='/estudiantes'
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', sm: 'flex' },
                            textDecoration: 'none',
                            color: '#fff'
                        }}
                    >
                        Estudiantes
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        component="a"
                        href='/notas'
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', sm: 'flex' },
                            textDecoration: 'none',
                            color: '#fff'
                        }}
                    >
                        Notas
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    )
}