import { useState } from "react";
import styled from "@emotion/styled";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import Resumen from "./Components/Resumen";
import Resultado from "./Components/Resultado";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenerdorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenerdorFormulario>
        <Formulario setResumen={setResumen} />
        <Resumen datos={datos} />
        <Resultado cotizacion={cotizacion} />
      </ContenerdorFormulario>
    </Contenedor>
  );
}

export default App;
