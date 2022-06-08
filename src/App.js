import "./App.css";
import { useState } from "react";

// 리액트는 데이터 바인딩이 굉장히 쉬움
// 중괄호{}를 사용하면 손쉽게 변수를 넣을 수 있음

function App() {
  // let [작명(=데이터를 담고있음), 작명(=state의 변경을 도와주는 함수)] = useState(보관할 자료);
  // state 는 값이 변경되면 자동으로 html이 재랜더링이 됨!
  // 자주 변경되는 html 부분은 state로 만들어 놓으면 된다
  let [content, setContent] = useState([
    {
      title: "페퍼로니 피자가 작살나는 가게",
      date: "2022-03-21",
      writer: "뉴욕치킨",
      likeCount: 12,
    },
    {
      title: "강력한 육즙 잘잘 벌집 삼겹살 맛집",
      date: "2022-03-29",
      writer: "뉴욕치킨",
      likeCount: 2,
    },
    {
      title: "엄마가 극찬한 밀크티 맛집",
      date: "2022-04-6",
      writer: "뉴욕치킨",
      likeCount: 5,
    },
  ]);

  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(1);

  return (
    <div className="App">
      <div className="nav">
        <h2>리액트 Blog</h2>
      </div>

      <button
        className="btn"
        onClick={() => {
          let copy = [...content];

          copy.sort(function (a, b) {
            let x = a.content.toLowerCase();
            let y = b.content.toLowerCase();

            if (x < y) return -1;

            if (x > y) return 1;

            return 0;
          });

          setContent(copy);
        }}
      >
        정렬
      </button>

      {/* 중괄호 안에서는 for문을 사용하지 못함 -> map함수를 써야함 */}
      {content.map(function (data, index) {
        return (
          <div className="list" key={index}>
            <h3
              onClick={() => {
                setModal(!modal);
                setTitleIndex(index);
              }}
            >
              <span className="index">{index + 1}</span>
              {data.title}
            </h3>
            <div className="list-bottom">
              <div className="regist">
                <span>{data.writer}</span>
                <span className="divide">|</span>
                <span>{data.date}</span>
              </div>
              <div className="like">
                {/* onClick 안에는 함수를 넣어야함 */}
                <span
                  onClick={() => {
                    let copy = [...content];
                    copy[index].likeCount = content[index].likeCount + 1;
                    setContent(copy);
                  }}
                >
                  💚
                </span>
                <p>{data.likeCount}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="input-container">
        <input type="text" />
        <button className="btn">발행</button>
      </div>

      {/* state 만드는 곳은 state 사용하는 컴포넌트들 중 가장 최상위 컴포넌트 */}
      {modal === true ? (
        <Modal
          setContent={setContent}
          contentData={content}
          index={titleIndex}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  let content =
    "이건 모달 내용이구요. 엄청나요! 리액트에서 사용하는 컴포넌트입니다.  \n 굉장해! 엄청나!";

  return (
    <div className="modal">
      <h4 className="header">{props.contentData[props.index].title}</h4>
      <div className="content">
        <div className="content-top">
          <span>{props.contentData[props.index].writer}</span>
          <p>{props.contentData[props.index].date}</p>
        </div>
        <p>{content}</p>

        <button
          className="btn"
          onClick={() => {
            let copy = [...props.contentData];
            copy[0].title = "시카고 피자가 굉장하게 작살나는 가게";
            props.setContent(copy);
          }}
        >
          글수정
        </button>
      </div>
    </div>
  );
}

export default App;
