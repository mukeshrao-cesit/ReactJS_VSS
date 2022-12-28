import React, { memo } from "react";

export const ChildMemo = memo(() => {
  console.log("Child Re-Render");
  return <div>ChildMemo</div>;
});
