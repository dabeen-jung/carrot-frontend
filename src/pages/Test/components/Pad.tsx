//모양 틀만 만들어주는 컴포넌트임
type PadType = {
  keyName: string;
  callback: (key: string) => void;
};

const Pad = (props: PadType) => {
  const { keyName, callback } = props;
  return <button onClick={() => callback(keyName)}>{keyName}</button>;
};

export default Pad;
