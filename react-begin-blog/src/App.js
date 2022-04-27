import "./App.css";

// 리액트는 데이터 바인딩이 굉장히 쉬움
// 중괄호{}를 사용하면 손쉽게 변수를 넣을 수 있음

function App() {
  let posts = "첫번째 게시글";
  let image =
    "https://img.huffingtonpost.com/asset/6168c6ce2000008f3f8d05a7.jpeg?ops=scalefit_720_noupscale";
  return (
    <div className="App">
      <div className="nav">
        <div className="title">리액트 Blog</div>
      </div>
      <span style={{ fontSize: "17px", color: "#495057" }}>{posts}</span>
      <img src={image}></img>
    </div>
  );
}

export default App;
