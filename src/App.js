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
      title: "강력한 육즙 잘잘 벌집 삼겹살 맛집",
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
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="nav">
        <h2>리액트 Blog</h2>
      </div>

      <button
        className="btn"
        onClick={() => {
          let copy = [...title];

          copy.sort(function (a, b) {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();

            if (x < y) return -1;

            if (x > y) return 1;

            return 0;
          });

          setTitle(copy);
        }}
      >
        정렬
      </button>

      <div className="list">
        <h3
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[0].title}
        </h3>
        <div className="list-bottom">
          <div className="regist">
            <span>{title[0].writer}</span>
            <span className="divide">|</span>
            <span>{title[0].date}</span>
          </div>
          <div className="like">
            {/* onClick 안에는 함수를 넣어야함 */}
            <span
              onClick={() => {
                setCount(likeCount + 1);
              }}
            >
              💚
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
            <span className="divide">|</span>
            <span>{title[1].date}</span>
          </div>
          <div className="like">
            <span>💚</span>
            <p>{likeCount}</p>
          </div>
        </div>
      </div>
      <div className="list">
        <h3>{title[2].title}</h3>
        <div className="list-bottom">
          <div className="regist">
            <span>{title[2].writer}</span>
            <span className="divide">|</span>
            <span>{title[2].date}</span>
          </div>
          <div className="like">
            <span>💚</span>
            <p>{likeCount}</p>
          </div>
        </div>
      </div>

      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  let title = "엄청난 모달입니다";
  let writer = "뉴욕치킨";
  let date = "2022-05-16";
  let content =
    "이건 모달 내용이구요. 엄청나요! 리액트에서 사용하는 컴포넌트입니다.  \n 굉장해! 엄청나!";

  return (
    <div className="modal">
      <h4 className="header">{title}</h4>
      <div className="content">
        <div className="content-top">
          <span>{writer}</span>
          <p>{date}</p>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default App;
