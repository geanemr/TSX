import React from "react";
import useFetch from "./useFetch";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

function Produto() {
  const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos");

  return <div>Produto</div>;
}

export default Produto;
