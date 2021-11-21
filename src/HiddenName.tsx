import { useState, ChangeEvent } from "react";

const Hidden = () => {
  const [name, setName] = useState("");

  //const newName = name;
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    let newName = event.currentTarget.value;
    if (newName.length > 2) {
      const startName = newName.substring(0, 1);
      const endName = newName.substring(newName.length - 1, newName.length);
      const hiddenPart = "*".repeat(newName.length - 2);
      newName = startName + hiddenPart + endName;
    }

    setName(newName);
  };

  return (
    <section>
      <input type="text" onChange={updateName} />
      <article> {name}님</article>
    </section>
  );
};

export default Hidden;
