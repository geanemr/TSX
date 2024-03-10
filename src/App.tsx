import React from "react";
import Input from "./Input";
import Button2 from "./Button2";
import Checkbox from "./Checkbox";
function App() {
  const [date, setDate] = React.useState("");
  const [total, setTotal] = React.useState(0);

  return (
    <>
      <div>Início da Viagem: {date}</div>
      <Input label="email" id="Email" type="email" />
      <Input label="nome" id="Nome" />
      <Input
        value={date}
        onChange={(event) => setDate(event.currentTarget.value)}
        label="início "
        id="Início da Viagem"
        type="date"
      />
      <Input label="horario" id="Horário" type="time" />
      <p>Total: {total}</p>
      <Button2 total={total} setTotal={setTotal} />
      <Checkbox label="Termos e condições"/>
    </>
  );
}
export default App;
