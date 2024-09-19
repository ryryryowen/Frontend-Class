import { useState } from "react";

const Body1 = () => {
  // const handleOnClick = (e) => {
  //   console.log(e.target.name);
  // };

  // const [count, setcount] = useState(0);

  // const onIcrease = () => {
  //   setcount(count + 1);
  // };

  // const [text, setText] = useState("");

  // const handleOnChange = (e) => {
  //   setText(e.target.value);
  // };
  // const [date, setDate] = useState("");

  // const handleOnChange = (e) => {
  //   console.log(e.target.value);
  //   setDate(e.target.value);
  // };

  // const [option, setOption] = useState("");

  // const handleOnChange = (e) => {
  //   console.log("변경된 값: ", e.target.value);
  //   setOption(e.target.value);
  // };

  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    console.log("변경된 값: ", e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleOnChange} />
      {/* <select value={option} onChange={handleOnChange}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
      </select> */}
      {/* <input type="date" value={date} onChange={handleOnChange} /> */}
      {/* <input onChange={handleOnChange} />
      <div>{text}</div> */}
      {/* <h2>{count}</h2>
      <button onClick={onIcrease}>+</button> */}
      {/* <button name="A버튼" onClick={handleOnClick}>
        A 버튼
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B 버튼
      </button> */}
    </div>
  );
};

export default Body1;
