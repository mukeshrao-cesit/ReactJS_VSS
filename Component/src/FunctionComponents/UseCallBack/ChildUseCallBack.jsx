import { memo } from "react";

const ChildUseCallBack = (props) => {
  console.log("Child Re-render");
  return (
    <>
      <button onClick={props.onClick}>Increment Counter 1 from child</button>
      <p>{props.counter}</p>
    </>
  );
};

export default memo(ChildUseCallBack);
