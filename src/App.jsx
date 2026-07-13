//import { useState } from "react";
import "./App.css";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Filtro from "./componentes/Filtro";
import Sidebar from "./componentes/Sidebar";
/* import Ordenacao from "./componentes/Ordenacao"; */
import Card from "./componentes/Cards";
import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes",
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);
  console.log(dados);
  
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Card />
      </div>
    </div>
  );
}

export default App;
