import { Component } from "react";
import "./app-info.scss"

export default class AppInfo extends Component {
  render() {
    return (
      <div className="app-info block">
        <h1>Data Agency LTD</h1>
        <h2>Employees Count: 0</h2>
        <h2>People who will recived a reward: 0</h2>
      </div>
    );
  }
}