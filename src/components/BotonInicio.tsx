import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouseChimney} from '@fortawesome/free-solid-svg-icons'

export const BotonInicio = () => {
    return (
        <div className="inicio">
       <Link to={'/'}><button className="botonInicio"><FontAwesomeIcon icon={faHouseChimney} /></button></Link> 
        </div>
    )
}