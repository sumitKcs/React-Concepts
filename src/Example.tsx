import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-screen h-screen text-white text-lg flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-5 p-5 m-10">
        <button
          className="w-[30%] h-10 bg-black rounded-lg"
          onClick={() => {
            // setCount(count + 1);//replace the state
            // setCount(count + 1);
            // setCount(count + 1);
            setCount((n) => n + 1);//updater function
            setCount((n) => n + 1);
            setCount((n) => n + 1);
            setCount(count + 1);//replacer 
          }}
        >
          +3
        </button>
        <div className="w-8 flex justify-center items-center">{count}</div>
      </div>
    </div>
  );
};

export default Example;
