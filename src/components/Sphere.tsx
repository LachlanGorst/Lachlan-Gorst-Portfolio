import { ReactNode, useEffect, useRef, useState } from "react";

const colStyle4 = { backgroundColor: "purple" };

interface Props {
  nameText: string;
  widthClass: string;
  index: number;
  onSphereClicked?: (index: number) => void;
  selected: number;
  nameArr: string[];
  sphereColor?: string;
  id?: number;
}

const Sphere = ({
  nameText,
  widthClass,
  index,
  onSphereClicked,
  selected,
  nameArr,
  sphereColor,
  id,
}: Props) => {
  let classStr = `center-image rounded-circle sphere ${widthClass}`;

  if (selected === index) {
    classStr += " selected-sphere";
  }

  const [styleStr, setStyleStr] = useState(`0px 0px 50px 10px`);

  useEffect(() => {
    document.getElementById(`${id}`)?.addEventListener("mouseenter", () => {
      setStyleStr(`0px 0px 50px 10px ${sphereColor}`);
    });

    document.getElementById(`${id}`)?.addEventListener("mouseleave", () => {
      setStyleStr(`0px 0px 50px 10px`);
    });
  }, []);

  return (
    <div className="row-3">
      <img
        id={`${id}`}
        style={{ boxShadow: styleStr }}
        className={classStr}
        src={
          index === -1
            ? `src/assets/${nameArr[selected]}.svg`
            : `src/assets/${nameText}.svg`
        }
        onClick={() => {
          if (onSphereClicked) {
            onSphereClicked(index);
          }
        }}
      ></img>
    </div>
  );
};

export default Sphere;
