import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioEstudiante from './pages/InicioEstudiante';
import InicioMateria from './pages/InicioMateria';
import Inicio from './pages/Inicio';
import InicioNotas from './pages/InicioNotas';
import InicioLoggeado from './pages/InicioLoggeado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<InicioLoggeado />} />
        <Route path='/estudiantes' element={<InicioEstudiante/>}></Route>
        <Route path='/materias' element={<InicioMateria />}></Route>
        <Route path='/notas' element={<InicioNotas/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
