import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Classificado from "./components/Classificado";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState("");
  const [erro, setErro] = useState("");

  const calcularIMC = () => {
    if (!altura || !peso) {
      setErro("Por favor, insira os valores de altura e peso.");
      return;
    }

    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);

    const imcArredondado = imcCalculado.toFixed(2);

    setIMC(imcArredondado);
    setClassificacao(classificarIMC(imcCalculado));
    setErro("");

  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 35) {
      return "Obesidade grau 1";
    } else if (imc < 40) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  };

  return (
    <>
      <div className="titulo">
      <h1>Calculadora de IMC</h1>
      </div>
    <div className="App">
      <div className="dados1">
      <Formulario
        label="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      </div>
      <div className="dados2">
      <Formulario
        label="Peso (kg) "
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      </div>
      <button className="botao" onClick={calcularIMC}>Calcular</button>
      {erro && <p>{erro}</p>}
      {imc && classificacao && <Classificado imc={imc} classificacao={classificacao} />}
    </div>
    </>
  );
}

export default App;

