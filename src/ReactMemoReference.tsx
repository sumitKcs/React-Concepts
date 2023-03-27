import React, { useState } from "react";

const Swatch = ({ params }: { params: { color: string } }) => {
  console.log(`child rendered ${params.color}`);
  return (
    <div
      className={`${
        params.color === "red" ? "bg-green-700" : "bg-red-700"
      } w-52 h-52`}
    ></div>
  );
};

const MemoedSwatch = React.memo(Swatch, (prevProps, nextProps) => {
  return prevProps.params.color === nextProps.params.color;
});

const ReactMemoReference = () => {
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
        <MemoedSwatch params={{ color }} />
      </div>
    </div>
  );
};

export default ReactMemoReference;
