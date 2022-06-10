import { useState } from "react";
//useState을 이용하여 틀만들기

const DiaryEditor = () => {
  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");
  // 위에 보이는 방법으로 할수있으나 하나로 요약가능 !
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: "1",
  });
  //input,textarea,emotion
  const handleChangeState = (el) => {
    setState({
      ...state,
      [el.target.name]: el.target.value,
    });
  };

  //저장하기 버튼
  const handleSubmit = (el) => {
    console.log(state);
    alert("완료");
  };
  return (
    <div className="DiaryEditor">
      <h1>오늘의 일기</h1>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        오늘의 감정점수 :
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={1}>2</option>
          <option value={1}>3</option>
          <option value={1}>4</option>
          <option value={1}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
