import React, { useState } from "react";

const Swatch = ({ color }: { color: string }) => {
  console.log(`child rendered ${color}`);
  return (
    <div
      className={`${color === "red" ? "bg-green-700" : "bg-red-700"} w-52 h-52`}
    ></div>
  );
};
const MemoedSwatch = React.memo(Swatch);
const ReactMemo = () => {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  console.log(`Parent rendered ${appRenderIndex}`);
  return (
    <div className="w-screen h-screen text-white flex flex-col justify-center items-center gap-5">
      <div className="w-screen flex justify-center gap-10">
        <button
          className="text-2xl bg-yellow-600 px-10 py-2 rounded-lg"
          onClick={() => setAppRenderIndex(appRenderIndex + 1)}
        >
          Re-render App
        </button>
        <button
          className="text-2xl bg-yellow-600 px-10 py-2 rounded-lg"
          onClick={() => setColor(color === "red" ? "green" : "red")}
        >
          Change Color
        </button>
      </div>
      <div className="flex gap-16">
        <MemoedSwatch color={color} />
        <MemoedSwatch color={color === "red" ? "green" : "red"} />
      </div>
    </div>
  );
};

export default ReactMemo;
