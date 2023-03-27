import { useState } from "react";

const ChildComponent = () => {
  console.log("ChildComponent");
  return <div>I am child component</div>;
};

const ParentComponent = () => {
  console.log("ParentComponent");
  const [count, setCount] = useState(0);
  const cachedChild = <ChildComponent />;
  return (
    <div className="w-screen h-screen text-white flex flex-col justify-center items-center gap-4">
      <button
        className=" w-60 bg-black py-2 px-2 rounded-lg flex items-center justify-center"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <div>I am Parent component</div>
      <div>{cachedChild}</div>
    </div>
  );
};

const RenderAppThree = () => {
  return <ParentComponent />;
};

export default RenderAppThree;
