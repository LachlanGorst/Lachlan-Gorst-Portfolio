import { useRef } from "react";

const AnotherOne = () => {
  const count = useRef(0);

  count.current = count.current + 1;

  const myList: number[] = [355, 3243, 234234, 1222, 123, 99999];

  return (
    <div
      style={{
        margin: "50px",
        backgroundColor: "lightblue",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Count: {count.current}</h1>
      <p>testing branch</p>
      <h2>something is wrong!!!!!!!!!!</h2>
      {/*<h1>Count: {count.current}</h1>
      <ul>
        {myList.map((value, key) => (
          <li key={key}>{value}</li>
        ))}
      </ul>*/}
    </div>
  );
};

export default AnotherOne;
