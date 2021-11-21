import { useState } from "react";
import Pad from "./Pad";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const inputKey = (key: string) => {
    //state 값을 변경하는 함수
    if (key === "=") {
      setExpression(eval(expression));
    } else {
      setExpression(expression + key);
    }
  };

  return (
    <>
      <section>
        <Pad keyName="7" callback={inputKey} />
        <Pad keyName="8" callback={inputKey} />
        <Pad keyName="9" callback={inputKey} />
      </section>
      <section>
        <Pad keyName="4" callback={inputKey} />
        <Pad keyName="5" callback={inputKey} />
        <Pad keyName="6" callback={inputKey} />
      </section>
      <section>
        <Pad keyName="1" callback={inputKey} />
        <Pad keyName="2" callback={inputKey} />
        <Pad keyName="3" callback={inputKey} />
      </section>
      <section>
        <Pad keyName="+" callback={inputKey} />
        <Pad keyName="-" callback={inputKey} />
        <Pad keyName="*" callback={inputKey} />
        <Pad keyName="/" callback={inputKey} />
        <Pad keyName="=" callback={inputKey} />
      </section>
      <input type="text" value={expression} />
    </>
  );
};

export default Calculator;
