import { Component } from "react";
import "./app-filter.scss";

export default class AppFilter extends Component {
  render() {
    return (
      <div className="app-filter">
        <button className="active_btn" type="button">All Employees</button>
        <button type="button">Promotion</button>
        <button type="button">Salary &gt; 1000$</button>
      </div>
    );
  }
}