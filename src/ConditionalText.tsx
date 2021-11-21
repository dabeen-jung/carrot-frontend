import { useState, ChangeEvent } from "react";

const Conditional = () => {
  const [name, setName] = useState("");

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <section>
      <input type="text" onChange={updateName} />
      <article> {name.length > 5 && name}님</article>
    </section>
  );
};

export default Conditional;
