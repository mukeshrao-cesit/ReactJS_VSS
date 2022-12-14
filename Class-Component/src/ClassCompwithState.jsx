import { Component } from "react";

class ClassCompwithState extends Component {
  obj = {
    name: "",
    password: "",
    date: "",
  };
  handleInputChange = (e) => {
    const { value, name } = e.target;
    if (!name) {
      return;
    }

    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, password, date } = this.obj;
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <label>Password </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
        ></input>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={this.handleChange}
        ></input>

        <br></br>

        <p>Name : {this.obj.name}</p>
        <p>Password : {this.obj.password}</p>
        <p>Date : {this.obj.date}</p>
      </div>
    );
  }
}

export default ClassCompwithState;
