import { Component } from "react";

export default class ReactPhases extends Component {
  constructor(props: any) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount(): void {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <ChildComponent />
      </>
    );
  }
}

class ChildComponent extends Component {
  constructor(props: any) {
    super(props);
    console.log("Child constructor");
  }

  componentDidMount(): void {
    console.log("Child componentDidMount");
  }
  render() {
    console.log("Child render");
    return <Child2Component />;
  }
}

class Child2Component extends Component {
  constructor(props: any) {
    super(props);

    console.log("Child2 constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/");
    console.log("Child2 componentDidMount");
  }
  render() {
    console.log("Child2 render");
    return <div>I am child2</div>;
  }
}
