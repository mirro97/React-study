import "./App.css";
import { useState } from "react";

// 리액트는 데이터 바인딩이 굉장히 쉬움
// 중괄호{}를 사용하면 손쉽게 변수를 넣을 수 있음

function App() {
  // let [작명(=데이터를 담고있음), 작명(=state의 변경을 도와주는 함수)] = useState(보관할 자료);
  // state 는 값이 변경되면 자동으로 html이 재랜더링이 됨!
  // 자주 변경되는 html 부분은 state로 만들어 놓으면 된다
  let [test, setTest] = useState("아아메가 깔끔한 카페 추천");
  let [title, setTitle] = useState([
    "페퍼로니 피자가 작살나는 가게",
    "육즙 잘잘 벌집 삼겹살 맛집",
    "엄마가 극찬한 밀크티 맛집",
  ]);
  let writer = "뉴욕치킨";
  return (
    <div className="App">
      <div className="nav">
        <h2>리액트 Blog</h2>
      </div>
      <div className="list">
        <h3>{title}</h3>
        <div className="list-bottom">
          <span>{writer}</span>
          <p>2022년 5월 7일</p>
        </div>
      </div>
    </div>
  );
}

export default App;
