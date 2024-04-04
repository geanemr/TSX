import React from "react";
import Input from "./Input";
import Button2 from "./Button2";
import Checkbox from "./Checkbox";
import Button from "./Button-useState";
import Fetch from "./fetchExercise";
import Ref from "./useRef";
import Volume from "./volume";
import Produto from "./Produto";

function App() {
  const [date, setDate] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const [number, setNumber] = React.useState(0);

  return (
    <>
      {/* <div>Início da Viagem: {date}</div>
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
      <p>{number}</p>
      <Button aumentar={setNumber} />
      <Fetch /> */}
      {/* <Ref /> */}
      {/* <Volume /> */}
      <Produto />
    </>
  );
}
export default App;
