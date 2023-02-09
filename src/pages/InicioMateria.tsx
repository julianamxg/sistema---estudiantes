import { RegistrarMateria } from "../components/materia/RegistrarMateria"
import { ListarMaterias } from "../components/materia/ListarMaterias";
import IMateria from "../components/modelos/materias/entidades/IMateria";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { addMateria, deleteMateria, getlistaMaterias } from "../components/modelos/materias";
import Swal from "sweetalert2";

function InicioMateria() {
  const initialState: IMateria = {
    materia: "",
    nombreProfesor: ""
  }
  const [materia, setMateria] = useState<IMateria>(initialState);
  const [materias, setMaterias] = useState<IMateria[]>([]);
  const [inputLectura, setInputLectura] = useState(true)

  //registrar
  function guardarMateria(): void {
    let idMateria = uuid()
    addMateria({ id: idMateria, ...materia });
    let listaMaterias = [...materias]
    listaMaterias.push({ id: idMateria, ...materia })
    setMaterias(listaMaterias)
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
    limpiarFormulario()
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

  const habilitarFormulario = () => {
    setInputLectura(!inputLectura)
  }


  return (
    <div className="App">
      <RegistrarMateria guardarMateria={guardarMateria} alCambiarValor={alcambiarValor} materia={materia} limpiar={limpiarFormulario} inputLectura={inputLectura} habilitarFormulario={habilitarFormulario} />
      {inputLectura ? <></> : <ListarMaterias eliminarMateria={eliminarMateria} materias={materias} />}
    </div>
  );
}

export default InicioMateria;