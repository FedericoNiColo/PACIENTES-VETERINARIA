import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState } from 'react'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({}); 

  const eliminarPaciente = (id) => {

    const pacientesActualizados = pacientes.filter(pac => paciente.id !== id);
    setPacientes(pacientesActualizados);
    console.log(id)

  }

  return (
    <div className="container mx-auto mt-20">

      <Header />
      
      <div className="mt-12 md:flex ">

      <Formulario  pacientes={pacientes} setPacientes={setPacientes} paciente={paciente}/>
      <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      
      </div>

    </div>

  )
}

export default App;
