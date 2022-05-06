import "./App.css";
import { useState } from "react";

// 리액트는 데이터 바인딩이 굉장히 쉬움
// 중괄호{}를 사용하면 손쉽게 변수를 넣을 수 있음

function App() {
  // let [작명(=데이터를 담고있음), 작명(=state의 변경을 도와주는 함수)] = useState(보관할 자료);
  // state 는 값이 변경되면 자동으로 html이 재랜더링이 됨!
  // 자주 변경되는 html 부분은 state로 만들어 놓으면 된다
  let [title, setTitle] = useState([
    {
      title: "페퍼로니 피자가 작살나는 가게",
      date: "2022-03-21",
      writer: "뉴욕치킨",
    },
    {
      title: "육즙 잘잘 벌집 삼겹살 맛집",
      date: "2022-03-29",
      writer: "뉴욕치킨",
    },
    {
      title: "엄마가 극찬한 밀크티 맛집",
      date: "2022-04-6",
      writer: "뉴욕치킨",
    },
  ]);

  let [likeCount, setCount] = useState(0);

  return (
    <div className="App">
      <div className="nav">
        <h2>리액트 Blog</h2>
      </div>
      <div className="list">
        <h3>{title[0].title}</h3>
        <div className="list-bottom">
          <div className="regist">
            <span>{title[0].writer}</span>
            <p>{title[0].date}</p>
          </div>
          <div className="like">
            {/* onClick 안에는 함수를 넣어야함 */}
            <span
              onClick={() => {
                setCount(likeCount + 1);
              }}
            >
              💙
            </span>
            <p>{likeCount}</p>
          </div>
        </div>
      </div>
      <div className="list">
        <h3>{title[1].title}</h3>
        <div className="list-bottom">
          <div className="regist">
            <span>{title[1].writer}</span>
            <p>{title[1].date}</p>
          </div>
          <div className="like">
            <span>💙</span>
            <p>{likeCount}</p>
          </div>
        </div>
      </div>
      <div className="list">
        <h3>{title[2].title}</h3>
        <div className="list-bottom">
          <div className="regist">
            <span>{title[2].writer}</span>
            <p>{title[2].date}</p>
          </div>
          <div className="like">
            <span>💙</span>
            <p>{likeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
