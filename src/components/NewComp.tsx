interface Props {
  name: string;
  age: number;
  isEducated: boolean;
  doSomething: () => void;
}

const NewComp = (props: Props) => {
  return <h1>{props.name}</h1>;
};

export default NewComp;
