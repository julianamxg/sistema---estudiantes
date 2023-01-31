import { RegistrarMateria } from "../components/materia/RegistrarMateria"
import { ListarMaterias } from "../components/materia/ListarMaterias";

function InicioMateria() {
    return (
        <div className="App">
            <RegistrarMateria />
            <ListarMaterias />
        </div>
    );
}

export default InicioMateria;