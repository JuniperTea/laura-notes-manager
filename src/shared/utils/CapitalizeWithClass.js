import React, { Component } from "react";
import { makeCapital } from "./operations";

export default class CapitalizeWithClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span data-testid="spn01">
        {makeCapital(this.props.label)} {makeCapital(this.props.label2)}
      </span>
    );
  }
}
