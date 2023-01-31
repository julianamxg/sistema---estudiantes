import { RegistrarNotas } from "../components/notas/RegistrarNotas";
import { ListarNotas } from "../components/notas/ListarNotas";

function InicioNotas() {
    return(
        <div className="App">
            <RegistrarNotas />
            <ListarNotas />
        </div>
    )
}

export default InicioNotas;