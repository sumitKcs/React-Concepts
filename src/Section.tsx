import React from "react";

type Props = {
  id: number;
  title: string;
  description: string;
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
};

const Section = ({
  id,
  title,
  description,
  selectedId,
  setSelectedId,
}: Props) => {
  const toggle = (id: number) => {
    if (selectedId === id) {
      return setSelectedId(null);
    }
    setSelectedId(id);
  };

  return (
    <div className="w-[80%] flex flex-col items-center text-white">
      <div
        onClick={() => toggle(id)}
        className="w-full flex items-center justify-between border border-white  p-5 bg-gray-900"
      >
        <div className="w-full flex justify-between cursor-pointer ">
          <div>{title} </div>
          <div>{selectedId === id ? "-" : "+"}</div>
        </div>
      </div>
      {selectedId === id && (
        <div className=" w-full h-32 border flex justify-center items-center">
          {description}
        </div>
      )}
    </div>
  );
};

export default Section;
