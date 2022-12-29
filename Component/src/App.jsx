import ClassComp from "./ClassComp";
import { FunctionalComp } from "./FunctionalComp";
import { ParentListMemo } from "./FunctionComponents/FilterListUsingMemo/ParentListMemo";
import { ParentMemo } from "./FunctionComponents/Memo/ParentMemo";

function App() {
  return (
    <div>
      {/* <ClassComp />
      <FunctionalComp /> */}
      {/* <ParentMemo /> */}
      <ParentListMemo />
    </div>
  );
}

export default App;
