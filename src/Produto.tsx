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
  const [id, setId] = React.useState("p001");
  const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos/");
  const produto = useFetch<Produto>(`https://data.origamid.dev/produtos/${id}`, {
    cache: "force-cache" //coloca em cache
  }); //vai atualizar porque a url é uma dep no useEffect do useFetch

  return (
    <section className="flex">
      <div>
        {produtos.data?.map((produto) => (
          <button
            onClick={() => setId(produto.id)}
            style={{ fontSize: "1rem" }}
            key={produto.id}
          >
            {produto.id}
          </button>
        ))}
      </div>
      <div>
        {produto.loading && <div>Carregando...</div>}
        {produto.data && (
          <ul>
            <li>ID: {produto.data.id}</li>
            <li>Nome: {produto.data.nome}</li>
            <li>Descrição: {produto.data.descricao}</li>
            <li>Quantidade: {produto.data.quantidade}</li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default Produto;
