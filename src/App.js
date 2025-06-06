import React from "react";
import Book from "./Book";
import Clock from "./Clock";
import AlertButton from "./AlertButton";
import TextInputWithFocusButton from "./TextInputWithFocusButton";
import UserStatus from "./UserStatus";
import Toggle from "./Toggle";
import SignUp from "./SignUp";

function App() {
  const today = new Date().toLocaleDateString();

  const user = {id: 1, name: "홍길동"};

  return (
    <div className="App">
      {/* <h1>안녕하세요, 리액트!</h1>
      <p>오늘 날짜: {today}</p>
      <button onClick={() => alert("버튼이 클릭되었습니다!")}>
        클릭하세요
      </button>

      <Book name='파이썬' numOfPage='300'/>
      <Book name='AWS' numOfPage='400'/>
      <Book name='리액트' numOfPage='500'/>

      <Clock />  */}
      {/*<AlertButton message="나를 눌렀느냐! 건방지구나!" /> /!*엘리먼트*!/*/}

        {/*<TextInputWithFocusButton />*/}
        {/*<UserStatus/>*/}
      <SignUp />
    </div>
  );
}

export default App;
