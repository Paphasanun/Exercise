import React from "react";
import "./App.css";
import Carousel from "./Components/Carousel";

class App extends React.Component {
  state = {
    count: 0,
  };
  render() {

    return (
      <div>
        <div
          style={{ margin: "50px auto", width: "50px", textAlign: "center" }}
        >
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          <p>{this.state.count}</p>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
        </div>
        <Carousel />
      </div>
    );
  }
}

export default App;
