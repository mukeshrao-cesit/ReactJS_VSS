import { Component } from "react";
import ClassCompProps from "./ClassComponents/ClassCompProps";
import MultiStateChange from "./ClassComponents/MultiStateChange";

class ClassCompwithState extends Component {
  render() {
    return (
      <div>
        <MultiStateChange />
      </div>
    );
  }
}

export default ClassCompwithState;
