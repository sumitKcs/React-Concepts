import React, { useState } from "react";

const ChildComponent = () => {
  console.log("ChildComponent");
  return <div>I am child component</div>;
};

const ParentComponent = ({ children }: { children: () => React.ReactNode }) => {
  const [count, setCount] = useState(0);

  console.log("ParentComponent");

  return (
    <div className="w-screen h-screen text-white flex flex-col justify-center items-center gap-4">
      <button
        className=" w-60 bg-black py-2 px-2 rounded-lg flex items-center justify-center"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <div>I am Parent component</div>
      <div>{children()}</div>
    </div>
  );
};

const RenderAppFive = () => {
  return <ParentComponent children={() => <ChildComponent />} />;
};

export default RenderAppFive;
