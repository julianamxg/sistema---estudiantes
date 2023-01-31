import { BotonInicio } from "../BotonInicio"
export const RegistrarMateria = () =>{
    
    return(
        <>
        <BotonInicio />
        <div className="formulario materia">
        <form>
            <h2>Registrar materia</h2>
            {/* <Link to={'/'}>Inicio</Link> */}
            <div className="grupos materia" >
                    <div className="grupo-input">
                        <label htmlFor="nombres">Materia</label>
                        <input type="text" name="nombres" id="nombres" placeholder="Ingresa el nombre de la materia" />
                    </div>
                    <div className="grupo-input">
                        <label htmlFor="nombres">Nombre del profesor</label>
                        <select name="tDocumento" id="tDocumento">
                                    <option>Selecciona...</option>
                                    <option>Sandra Roncancio</option>
                                    <option>Luis Rodriguez</option>
                                    <option>Paola Sanchez</option>
                                    <option>Tatiana Galindo</option>
                                    <option>Luna Perez</option>
                                    <option>Claudia Lopez</option>
                                    <option>Felipe Romero</option>
                                    <option>Laura Martinez</option>
                                    <option>Maria Rodriguez</option>
                                    <option>Carolina Forero</option>
                                    <option>Carla Rodriguez</option>
                                </select>
                    </div>
            </div>
            <button type="submit">Guardar</button>
        </form>

    </div>
    </>
    )
}