import { useEffect, useState, useRef } from "react";
import { ClassCode } from "../ClassCode";
import Animal from "../classes/Animal";

interface Props {
  choice: boolean;
}

export const CarComponent = (props: Props) => {
  const [animalName, setName] = useState("no animals");
  let count = 0;
  let countRef = useRef(0);

  useEffect(() => {
    console.error("SETUP USE EFFECT");
    document
      .getElementsByClassName("above")[0]
      ?.addEventListener("mouseenter", () => {
        const indexOfNew: number = ClassCode.addAnimal(
          new Animal(`dog ${count} `)
        );
        //setName(ClassCode.getAnimal(indexOfNew)?.getName ?? "No animals still");
        count++;
        countRef.current++;
        console.log(
          `index: ${indexOfNew}, count: ${count}, countRef: ${countRef.current}`
        );
      });
  }, []);

  useEffect(() => {
    console.error("rendered");
  });

  if (props.choice) {
    return <h1 className="above">{count}</h1>;
  } else {
    return <h1 className="above">NOOOO</h1>;
  }
};
