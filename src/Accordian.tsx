import { useState } from "react";

import data from "../data";

const Accordian = () => {
  const [slelcted, setSelected] = useState<number | null>();

  const toggle = (id: number) => {
    if (slelcted === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-10">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="w-[80%] flex flex-col items-center text-white"
          >
            <div
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between border border-white  p-5 bg-gray-900"
            >
              <div className="w-full flex justify-between cursor-pointer ">
                <div>{item.title} </div>
                <div>{slelcted === item.id ? "-" : "+"}</div>
              </div>
            </div>
            {slelcted === item.id && (
              <div className=" w-full h-32 border flex justify-center items-center">
                {item.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
