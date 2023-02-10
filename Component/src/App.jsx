import ClassComp from "./ClassComp";
import { FunctionalComp } from "./FunctionalComp";
import { Parent } from "./FunctionComponents/DynamicForm/Parent";
import { ParentListMemo } from "./FunctionComponents/FilterListUsingMemo/ParentListMemo";
import { ParentMemo } from "./FunctionComponents/Memo/ParentMemo";
import ParentUseCallBack from "./FunctionComponents/UseCallBack/ParentUseCallBack";
import UseTransition from "./FunctionComponents/UseTransition/UseTransition";

function App() {
  return (
    <div>
      {/* <ClassComp />
      <FunctionalComp /> */}
      {/* <ParentMemo /> */}
      {/* <ParentListMemo /> */}
      {/* <ParentUseCallBack /> */}
      {/* <Parent /> */}
      <UseTransition />
    </div>
  );
}

export default App;
