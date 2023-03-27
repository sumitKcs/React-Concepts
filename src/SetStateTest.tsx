import { useState } from "react";

const SetStateTest = () => {
  const [text, setText] = useState("");

  const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handler called");
    setText(e.target.value);
    setText(e.target.value);
    setText(e.target.value);
    setText(e.target.value);
    console.log("text value:", text);
  };
  console.log("re-render");
  console.log("text value:", text);
  //React batches the state updates

  return (
    <div className="w-screen flex flex-col justify-center items-center h-screen border text-white">
      <input
        className=" w-96 bg-gray-700 p-5 rounded-lg focus:border-b-4 focus:border-green-700 focus:outline-none transition-colors duration-75"
        type="text"
        value={text}
        onChange={textHandler}
      />
      <p className="border-l-8 border-yellow-800 h-24 w-[60%] py-5 mt-8 px-2 flex items-center">
        {text}
      </p>
    </div>
  );
};

export default SetStateTest;
