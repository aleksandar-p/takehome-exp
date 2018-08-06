import "./style/index.scss";
import * as React from "react";
import { render } from "react-dom";
import { observer, Provider, inject } from "mobx-react";
import { ExpressionItem } from "./components/ExpressionItem";
import { ExpressionStore } from "./stores/ExpressionStore";

@inject("expressionStore")
@observer
class Output extends React.Component<{ expressionStore?: ExpressionStore }> {
  render() {
    let result = this.props.expressionStore.expressionString;
    return (
      <div className="output">{result}</div>
    );
  }
}

@inject("expressionStore")
@observer
class Workspace extends React.Component<{ expressionStore?: ExpressionStore }> {
  render() {
    return (
      <div className="input">
        <div className="container">
          <ExpressionItem item={this.props.expressionStore.expression} />
        </div>
      </div>
    );
  }
}

class RootComponent extends React.Component {
  private expressionStore = new ExpressionStore();
  render() {
    return (
      <Provider expressionStore={this.expressionStore}>
        <div className="root">
          <Workspace />
          <Output />
        </div>
      </Provider>
    );
  }
}

render(<RootComponent />, document.getElementById("main"));
