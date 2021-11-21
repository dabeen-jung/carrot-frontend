type Age = {
  age: number;
};
/*이름짓기가 애매해서 props 쓰는 것임*/
const Adult = (props: Age) => {
  const { age } = props;
  return <span>{age >= 20 ? "성인" : "미성년"}</span>;
};

export default Adult;
