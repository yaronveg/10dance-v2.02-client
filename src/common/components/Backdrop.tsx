import { ReactNode } from "react";
import "./Backdrop.scss";

const Backdrop = ({
  children,
  show,
  onClick,
}: {
  children: ReactNode;
  show: boolean;
  onClick: () => void;
}) => {
  return (
    <>
      {show && <div className="backdrop" onClick={onClick}></div>}
      <div className="children">{children}</div>
    </>
  );
};

export default Backdrop;
