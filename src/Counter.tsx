import { useState, MouseEvent } from "react";

type CounterType = {
  defaultCount: number;
};

const Counter = (props: CounterType) => {
  const { defaultCount } = props;
  const [count, setCount] = useState<number>(defaultCount);

  const increaseCount = (event: MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  };
  const decreaseCount = (event: MouseEvent<HTMLButtonElement>) => {
    setCount(count - 1);
  };

  return (
    <section>
      <section>{count}</section>
      <section>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </section>
    </section>
  );
};
//props는 내가 이 컴포넌트에서 객체 이런 식으로 전달 받아와야 한다고 미리 언급하는 것임

//props는 type에 지정하고 내가 App.tsx에서 전달 받아와야 하는 변수들이다
export default Counter;
