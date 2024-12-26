import { Component } from "react";
import "./app-search.scss"

export default class AppSearch extends Component {
  render() {
    return (
      <div className="app-search">
        <input
          type="serach"
          placeholder="Type here..."
        />
        <button>Search</button>
      </div>
    );
  }
}