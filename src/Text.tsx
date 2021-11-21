type TextType = {
  text: string;
  type?: string;
};

const Text = (textType: TextType) => {
  const { text, type } = textType; //TitleText.title이 안 되도록 이렇게 만들어 줌
  return (
    <>
      {type === "bold" && <b> {text} </b>}
      {type === "header" && <h1>{text}</h1>}
    </>
  );
};

/*
return 값에는 무조건 태그가 하나 있어야하며 -> 그렇기에 <></> 빈태그로 감싸준 상태로 함
, h1같은 레벨의 태그는 동시에 공존해서는 안된다 -> 하나만 존재,,,

*/

export default Text;
