import { useState, ReactNode } from "react";
import Sphere from "./Sphere";
import AnotherOne from "./AnotherOne";

const PageGrid = () => {
  const colStyle = { backgroundColor: "blue" };
  const colStyle2 = { backgroundColor: "red" };
  const colStyle3 = { backgroundColor: "green" };

  const nameArr = [
    "man",
    "unity-69",
    "react-2",
    "nodejs-1",
    "html-1",
    "css-3",
    "javascript-1",
  ];

  const languageArr = [
    "Lachlan Gorst",
    "Unity",
    "React",
    "NodeJS",
    "HTML",
    "CSS",
    "Javascript",
  ];

  const colorsArr = [
    "col-aqua",
    "col-blue",
    "col-light-blue",
    "col-green",
    "col-orange",
    "col-blue",
    "col-yellow",
    "col-plain",
  ];

  const colorCodeArr = [
    "aquamarine",
    "dodgerblue",
    "lightskyblue",
    "forestgreen",
    "orangered",
    "dodgerblue",
    "gold",
    "dodgerblue",
  ];

  // THIS SHOULD BE MORE ABOUT PROJECT DEMONSTRATIONS AND NOT EXPLAINING WHAT LANGUAGES DO //
  const detailsArr = [
    "Hi there! I am a Software Developer with a passion for coding, collaborating with a team and creating enjoyable experiences for people. Click on any of the spheres to get a deeper understanding of each language I know.",
    "Unity (C#) is the technology I used to create a phyics-based PC game, with a demo on Steam named Elysia. Also my mobile game on IOS and Android named GXRST Racing!",
    "React is the library that is currently running this single-page website at the moment. Features like mapping an array into the list of spheres, and updating the UI on state change are all made possible by React.",
    "I have used NodeJS to create an API on Firebase to allow users of my mobile app to upload high scores, and advertisers on my website to submit images and videos.",
    "HTML like the <h1> you are currently reading has been the building block of every website I have built - including this one. An essential for any web developer.",
    "CSS is another essential of every website. Currently being used to set the size, positions and visuals of the entire page you see.",
    "Javascript provides the behavioural functionality of this page. For example using onClick to call a function which updates the selected sphere.",
  ];

  const [pageWidth, setPageWidth] = useState(visualViewport?.width ?? 0);
  const [selected, setSelected] = useState(0);

  function onSphereClicked(newIndex: number) {
    setSelected(newIndex);
  }

  function getMainText(): string {
    return colorsArr[selected];
  }

  let secondSphereIds = nameArr.length;

  function squareGrid() {
    return (
      <div id="top-row" className="row">
        <div className="col-3 scroll">
          {nameArr.map((name, key) => (
            <Sphere
              selected={selected}
              onSphereClicked={onSphereClicked}
              index={key}
              key={key}
              nameText={name}
              widthClass="width-20vw"
              nameArr={nameArr}
              sphereColor={colorCodeArr[key]}
              id={key}
            ></Sphere>
          ))}
        </div>
        <div className="col-9 scroll">
          <div className="row-10">
            <Sphere
              selected={selected}
              index={-1}
              nameText="profile"
              widthClass="width-60vw"
              nameArr={nameArr}
            ></Sphere>
          </div>
          <div className="row-1">
            <h1 className={`center main-text ${getMainText()}`}>
              {languageArr[selected]}
            </h1>
          </div>

          <div className="row-1">
            <h1 className="center secondary-text">{detailsArr[selected]}</h1>
          </div>
        </div>
      </div>
    );
  }

  function widescreenGrid() {
    return (
      <div id="top-row" className="row">
        <div className="col-3 scroll">
          {nameArr.map((name, key) => (
            <Sphere
              selected={selected}
              onSphereClicked={onSphereClicked}
              index={key}
              key={key}
              nameText={name}
              widthClass="width-20vw"
              nameArr={nameArr}
              sphereColor={colorCodeArr[key]}
              id={key}
            ></Sphere>
          ))}
        </div>
        <div className="col-6 scroll">
          <div className="row-10">
            <Sphere
              selected={selected}
              index={-1}
              nameText="profile"
              widthClass="width-45vw"
              nameArr={nameArr}
            ></Sphere>
          </div>
          <div className="row-1">
            <h1 className={`center main-text ${getMainText()}`}>
              {languageArr[selected]}
            </h1>
          </div>

          <div className="row-1">
            <h1 className="center secondary-text">{detailsArr[selected]}</h1>
          </div>
        </div>
        <div className="col-3 scroll">
          {nameArr.map((name, key) => (
            <Sphere
              selected={selected}
              onSphereClicked={onSphereClicked}
              index={key}
              key={key + secondSphereIds}
              nameText={name}
              widthClass="width-20vw"
              nameArr={nameArr}
              sphereColor={colorCodeArr[key]}
              id={key + secondSphereIds}
            ></Sphere>
          ))}
        </div>
      </div>
    );
  }

  function whichGrid() {
    let heightView = visualViewport?.height ?? 0;
    if (pageWidth <= heightView) {
      return squareGrid();
    } else {
      return widescreenGrid();
    }
  }

  addEventListener("resize", (event) => {
    setPageWidth(visualViewport?.width ?? 0);
  });

  return whichGrid();
};

export default PageGrid;
