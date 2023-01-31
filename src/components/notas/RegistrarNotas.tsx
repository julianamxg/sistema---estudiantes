import { BotonInicio } from "../BotonInicio"
export const RegistrarNotas = () => {
    return (
        <>
            <BotonInicio />
            <div className="formulario">
                <form>
                    <h2>Registrar notas</h2>
                    {/* <Link to={'/'}>Inicio</Link> */}
                    <div className="grupos" >
                        <div className="grupo-input">
                            <label htmlFor="nombres">Materia</label>
                            <select name="tDocumento" id="tDocumento">
                                <option>Selecciona...</option>
                                <option>Matematicas</option>
                                <option>Español</option>
                            </select>
                        </div>

                        <div className="grupo-input">
                            <label htmlFor="apellidos">Estudiante</label>
                            <select name="tDocumento" id="tDocumento">
                                <option>Selecciona...</option>
                                <option>Jenny</option>
                                <option>Juliana</option>
                            </select>
                        </div>

                        <div className="grupo-input">
                            <label htmlFor="tDocumento">Nota</label>
                            <select name="tDocumento" id="tDocumento">
                                <option>Selecciona...</option>
                                <option>50</option>
                                <option>45</option>
                                <option>40</option>
                                <option>35</option>
                                <option>30</option>
                                <option>25</option>
                                <option>20</option>
                                <option>15</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit">Guardar</button>
                </form>

            </div>
        </>
    )
}