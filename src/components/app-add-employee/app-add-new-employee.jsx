import { Component } from "react";
import "./app-add-new-employee.scss";

export default class AppAddNewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: ""
    };
  }

  onInputValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { name, salary } = this.state;
    return (
      <div className="add-new-employee block">
        <h3>Add new Employee</h3>

        <form className="add-new-employee-group c" >
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Employee name"
            onChange={this.onInputValueChange}
          />
          <input
            type="number"
            name="salary"
            value={salary}
            placeholder="Employee salary"
            onChange={this.onInputValueChange}
          />
          <button type="button" onClick={() => this.props.addEmployee({name, salary})}>Add</button>
        </form>
      </div>
    );
  }
}