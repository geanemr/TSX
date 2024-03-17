import React from "react";

function user() {
  return {
    nome: "Geane",
    profissao: "desenvolvedora",
  };
}

type User = {
  nome: string;
  profissao: string;
};

const useState = () => {
  const [data, setData] = React.useState<null | User>(null);

  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);
  return (
    <div>
      {data !== null && (
        <div>
          {data.nome}: {data.profissao}
        </div>
      )}
    </div>
  );
};

export default useState;
