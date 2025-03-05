import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="main-note alert alert-primary">{children}</div>;
};

export default Alert;
