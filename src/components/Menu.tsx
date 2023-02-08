import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'

export const Menu = () => {
    return (

        <div className="menu">
            <div className="inicio">
                <Link to={'/'}><button className="botonInicio"><FontAwesomeIcon icon={faHouseChimney} /></button></Link>
            </div>
            <div className="links">
                <Link to={'/materias'}>Materias</Link>
                <Link to={'/estudiantes'}>Estudiantes</Link>
                <Link to={'/notas'}>Notas</Link>
            </div>
        </div>
    )
}