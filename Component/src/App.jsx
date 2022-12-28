import ClassComp from "./ClassComp";
import { FunctionalComp } from "./FunctionalComp";
import { ParentMemo } from "./FunctionComponents/Memo/ParentMemo";

function App() {
  return (
    <div>
      {/* <ClassComp />
      <FunctionalComp /> */}
      <ParentMemo />
    </div>
  );
}

export default App;
