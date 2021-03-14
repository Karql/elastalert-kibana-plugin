import React, { Component, useState  } from 'react';
import { EuiButton } from '@elastic/eui';

export default class Item extends Component {
  

  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    };
  }

  onClick = (e) => {
    let pressed = !this.state.pressed
    this.setState({ pressed: pressed });
    this.props.handler(this.props.rule, pressed);
  };

  render() {
    return (
      <EuiButton
        aria-label={this.props.rule}
        title={this.props.rule}
        aria-pressed={this.state.pressed}
        fill={this.state.pressed}
        onClick={this.onClick}
      >
        {this.props.rule}
      </EuiButton>
    );
  }
}
