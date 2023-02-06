import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioEstudiante from './pages/InicioEstudiante';
import InicioMateria from './pages/InicioMateria';
import Inicio from './pages/Inicio';
import InicioNotas from './pages/InicioNotas';
import IEstudiante from './components/entidades/IEstudiante';
import EditarEstudiante from './pages/EditarEstudiante';
import EditarMateria from './pages/EditarMateria';
import { useState } from 'react';
import EditarNota from './pages/EditarNota';

const initialState: IEstudiante = {
  nombres: "",
  apellidos: "",
  tDocumento: "",
  nDocumento: 0,
  grado: "",
  dGrado: ""
}

function App() {

  const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);

  const agregarEstudiante = (estudiante: IEstudiante) => {
    let copiaEstudiantes = estudiantes;
    copiaEstudiantes.push(estudiante);
    setEstudiantes(copiaEstudiantes);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/estudiantes' element={<InicioEstudiante agregarEstudiante={agregarEstudiante} />}></Route>
        <Route path="/editar-estudiante/:id" element={<EditarEstudiante />} />
        <Route path='/materias' element={<InicioMateria />}></Route>
        <Route path="/editar-materia/:id" element={<EditarMateria />} />
        <Route path='/notas' element={<InicioNotas />}></Route>
        <Route path="/editar-nota/:id" element={<EditarNota />} />
      </Routes>
    </Router>
  );
}

export default App;
