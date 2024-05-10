import React from "react";

export class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "blue" });
    }, 2000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ color: "green" });
    }, 3000);
  }
  render() {
    return (
      <div>
        <h1>My fav color is {this.state.color}</h1>
      </div>
    );
  }
}

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let header;
    if (this.state.show) {
      header = <Child />;
    }
    return (
      <div>
        {header}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}
class Child extends Container {
  componentWillUnmount() {
    alert("component will unmount");
  }
  render() {
    return (
      <div>
        <h1>Hello Header</h1>
      </div>
    );
  }
}
