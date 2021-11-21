import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const calculated = num1 + num2;
  const updateNum1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNum1(newNumber);
  };

  const updateNum2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNum2(newNumber);
  };

  return (
    <section>
      <article>계산 결과: {calculated}</article>
      <section>
        <input type="text" onChange={updateNum1} />
        +
        <input type="text" onChange={updateNum2} />
      </section>
    </section>
  );
};

export default Adder;
