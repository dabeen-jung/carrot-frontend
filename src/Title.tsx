type TitleText = {
  title: string;
  subTitle?: string;
};

const Title = (text: TitleText) => {
  const { title, subTitle } = text; //TitleText.title이 안 되도록 이렇게 만들어 줌
  return (
    <>
      <h1>
        {title}
        <hr />
        <h3>{subTitle}</h3>
      </h1>
    </>
  );
};

export default Title;
