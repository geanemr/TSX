import React from "react";
import Input from "./Input";
import Button from "./Button";

type Vendas = {
  id: number;
  nome: string;
  preco: number;
  status:string;
  data: string;
};

function Fetch() {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  const [data, setData] = React.useState<null | Vendas[]>(null);

  React.useEffect(() => {
    if (inicio !== '' && final !== '')
    fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
      .then((r) => r.json())
      .then((json) => setData(json as Vendas[]))
      .catch((error) => console.log(error));
}, [inicio, final]);

  return (
    <>
      <p>Vendas (exercício):</p>
      <Input
        label="Início"
        id="inicio"
        type="date"
        value={inicio}
        onChange={(event) => setInicio(event.currentTarget.value)}
      />
      <Input
        label="Final"
        id="date"
        type="date"
        value={final}
        onChange={(event) => setFinal(event.currentTarget.value)}
      />
      <div>
        <ul>
          {data && data.map((venda) => (
            <li key={venda.id}>{venda.nome} - {venda.data}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Fetch;
