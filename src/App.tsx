import BottomAppBar from "./components/BottomAppBar";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar>{"YEah"}</Toolbar>
      </AppBar>
      <Toolbar />
      내용
      <BottomAppBar />
    </main>
  );
};

// import Button from "./Button";
// import Title from "./Title";
// import Text from "./Text";
// import Adult from "./Adult";
// import Photo from "./Photo";
// import { KeyboardEvent } from "react";
// import Counter from "./Counter";
// import Adder from "./Adder";
// import Welcome from "./WelcomeName";
// import Conditional from "./ConditionalText";
// import Hidden from "./HiddenName";
// import Calculator from "./pages/Test/components/Calculator";
// import Test from "./pages/Test";

//const App = () => {
//   const welcomeText = "Title!";
//   const subText = "Subtitle!";
//   const count = 10;
//   const [latestName, setLatestName] = useState(""); //state 값
//   const updateLatestName = (name: string) => {
//     //state 값을 변경하는 함수
//     setLatestName(name);
//   };

//   const [last, setLast] = useState(""); //state 값
//   const updateNum = (keyName: string) => {
//     //state 값을 변경하는 함수
//     setLast(keyName);
//   };
//   const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
//     console.log(event.key);
//     if (event.key === "h") {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//   };

//   return (
//     <div className="App">
//       <>
//         <Title title={welcomeText} subTitle={subText} />
//         <Text text="mamamoo" type="bold" />
//         <Adult age={20} />
//         <br />
//         {/* {count > 5 ? <Button name="go" /> : <Button name="back" />} */}
//         <br />
//         <Button name="hello" callback={updateLatestName} />
//         <Button name="world" callback={updateLatestName} />
//         <Button name="nextop" callback={updateLatestName} />
//         {/*
//         <section></section>

//         <article>{latestName} is clicked!</article>
//         <Photo
//           address="https://lh3.googleusercontent.com/proxy/Lw-fZOq707B6j7pm9FpYnyyaPJ9bggWhXtxNUL9K9wlR_ZUviTSLK7PYCsZ1NpRD50EUM1E3YHDvO8aHGIBUlKYm_1EamvC14A3L71hrY7pDWIxAgCk"
//           description="설명이에용~"
//         />
//         <br />
//         <Adder />
//         <br />
//         <input type="text" onKeyDown={preventKeyDown} />
//         <Counter defaultCount={0} />

//         <Welcome />

//         <Conditional />
//         <Hidden /> */}

//         <Test />
//       </>
//     </div>
//   );
// };

// /*//왜 function을 지우고 const로 함수를 정의 했나?
// //function은 함수를 수정할 수 있기 때문,*/

export default App;
