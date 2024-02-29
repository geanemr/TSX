import React from "react";
import Button from "./Button";
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>Total:</p>
      <Button onClick={() => setCount(count + 1)}>Incrementar-{count}</Button>
    </>
  );
}
export default App;
