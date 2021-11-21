import { useState, ChangeEvent } from "react";

const Welcome = () => {
  const [name, setName] = useState("");

  const welcomeName = name;
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <section>
      <input type="text" onChange={updateName} />
      <article> 반갑습니다 {welcomeName} 님</article>
    </section>
  );
};

export default Welcome;
