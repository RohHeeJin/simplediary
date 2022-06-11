import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "노희진",
    content: "Hi",
    emotion: 5,
    created_date: new Date().getTime(), //생성자(현재시간을 기준으로 입력됨)
  },
  {
    id: 2,
    author: "홍길동",
    content: "Hi",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이순신",
    content: "Hi",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
