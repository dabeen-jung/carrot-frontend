type PhotoText = {
  address: string;
  description: string;
};

const Photo = (text: PhotoText) => {
  const { address, description } = text; //TitleText.title이 안 되도록 이렇게 만들어 줌
  return (
    <>
      <section>
        <img src={address} />
      </section>
      <article>{description}</article>
    </>
  );
};

export default Photo;
