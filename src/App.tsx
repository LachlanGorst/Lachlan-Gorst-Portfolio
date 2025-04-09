import AnotherOne from "./components/AnotherOne";
import PageGrid from "./components/PageGrid";
import { useEffect } from "react";

function App() {
  const nameArr = ["bob", "john", "mary", "sue"];

  function handleSelectedItem(item: string) {
    console.log(item);
  }

  useEffect(() => {
    console.warn("MAKING APP USE EFFECT");
  }, []);

  return (
    <div className="main-div">
      {/*<Alert>hey</Alert>*/}
      {/*<CarComponent choice={true} />*/}
      <PageGrid />
      {/*
      <ListGroup
        items={[]}
        heading="human BEANS"
        onSelectedItem={handleSelectedItem}
      />
      {nameArr.map((value) => (
        <div className="sphere rounded-circle">{value}</div>
      ))}
      */}
    </div>
  );
}

export default App;
