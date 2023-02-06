import { RegistrarMateria } from "../components/materia/RegistrarMateria"
import { ListarMaterias } from "../components/materia/ListarMaterias";
import IMateria from "../components/entidades/IMateria";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { addMateria, deleteMateria, getlistaMaterias } from "../services/datosMateria";
import Swal from "sweetalert2";

function InicioMateria() {
  const initialState: IMateria = {
    materia: "",
    nombreProfesor: ""
  }
  const [materia, setMateria] = useState<IMateria>(initialState);
  const [materias, setMaterias] = useState<IMateria[]>([]);

  //registrar
  function guardarMateria(): void {
    let idMateria = uuid()
    addMateria({ id: idMateria, ...materia });
    materias.push({ id: idMateria, ...materia })
    setMaterias(materias)
    if (1 === 1) {
      Swal.fire({
        text: `Se ha guardado la materia de ${materia.materia}`,
        icon: 'success',

      })
    }
    else {
      Swal.fire({
        text: `No se pudo guardar la materia`,
        icon: 'error',
      })
    }
  }

  const alcambiarValor = (name: string, value: string) => {
    setMateria({ ...materia, [name]: value })
  }

  const limpiarFormulario = () => {
    setMateria(initialState)
  }

  //listar
  useEffect(() => {
    setMaterias(getlistaMaterias());
  }, [])

  function eliminarMateria(id?: string): void {
    deleteMateria(id);
    let materia = materias.filter((materia: IMateria) => materia && materia.id !== id)
    setMaterias(materia);
  }


  return (
    <div className="App">
      <RegistrarMateria guardarMateria={guardarMateria} alCambiarValor={alcambiarValor} materia={materia} limpiar={limpiarFormulario} />
      <ListarMaterias eliminarMateria={eliminarMateria} materias={materias} />
    </div>
  );
}

export default InicioMateria;