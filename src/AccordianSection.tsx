import { useState } from "react";
import data from "../data";
import Section from "./Section";

const AccordianSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-10">
      {data.map((item) => {
        return (
          <Section
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            selectedId={selected}
            setSelectedId={setSelected}
          />
        );
      })}
    </div>
  );
};

export default AccordianSection;
