import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioEstudiante from './pages/InicioEstudiante';
import InicioMateria from './pages/InicioMateria';
import Inicio from './pages/Inicio';
import InicioNotas from './pages/InicioNotas';
import EditarEstudiante from './pages/EditarEstudiante';
import EditarMateria from './pages/EditarMateria';
import EditarNota from './pages/EditarNota';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/estudiantes' element={<InicioEstudiante/>}></Route>
        <Route path="/editar-estudiante/:id" element={<EditarEstudiante />} />
        <Route path='/materias' element={<InicioMateria />}></Route>
        <Route path="/editar-materia/:id" element={<EditarMateria />} />
        <Route path='/notas' element={<InicioNotas/>}></Route>
        <Route path="/editar-nota/:id" element={<EditarNota />} />
      </Routes>
    </Router>
  );
}

export default App;
