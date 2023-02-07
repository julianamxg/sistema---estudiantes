import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioEstudiante from './pages/InicioEstudiante';
import InicioMateria from './pages/InicioMateria';
import Inicio from './pages/Inicio';
import InicioNotas from './pages/InicioNotas';
import IEstudiante from './components/entidades/IEstudiante';
import EditarEstudiante from './pages/EditarEstudiante';
import EditarMateria from './pages/EditarMateria';
import EditarNota from './pages/EditarNota';
import IMateria from './components/entidades/IMateria';
import { getlistaEstudiantes } from './services/datosEstudiante';
import { getlistaMaterias } from './services/datosMateria';

function App() {
  function listaEstudiantes(): IEstudiante[] {
    return getlistaEstudiantes()
  }
  
  function listaMaterias(): IMateria[] {
    return getlistaMaterias();
  }
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/estudiantes' element={<InicioEstudiante/>}></Route>
        <Route path="/editar-estudiante/:id" element={<EditarEstudiante />} />
        <Route path='/materias' element={<InicioMateria />}></Route>
        <Route path="/editar-materia/:id" element={<EditarMateria />} />
        <Route path='/notas' element={<InicioNotas listaEstudiantes={listaEstudiantes()} listaMaterias={listaMaterias()}/>}></Route>
        <Route path="/editar-nota/:id" element={<EditarNota listaEstudiantes={listaEstudiantes()} listaMaterias={listaMaterias()}/>} />
      </Routes>
    </Router>
  );
}

export default App;
