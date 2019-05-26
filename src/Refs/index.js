import React, { Component } from 'react';
import { Button } from 'antd';

/**
 * Contrast the refs created by react.createRef method and the ref received through function.
 */
class Refs extends Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();
    this.buttonElement = React.createRef();
    console.group();
    console.log('React.createRef and initial');
    console.log(this.inputElement);
    console.log(this.buttonElement);
    console.groupEnd();
  }

  componentDidMount() {
    console.group();
    console.log('React.createRef and HTML DOM ref');
    console.log(this.inputElement);
    console.log('React.createRef and Class component ref');
    console.log(this.buttonElement);
    console.groupEnd();
  }

  render() {
    return (
      <React.Fragment>
        <h1>React.createRef</h1>
        <p>Accessible at the current attribute of the ref.</p>
        <input ref={this.inputElement} />
        <br />
        <Button ref={this.buttonElement}>button</Button>
        <h1>callback</h1>
        <p>The function receives the React component instance or HTML DOM element as its argument.</p>
        <input ref={(ref) => {
          console.log('Callback and html dom ref');
          console.log(ref);
        }} />
        <br />
        <Button ref={(ref) => {
          console.log('Callback and class component ref');
          console.log(ref);
        }}>button</Button>
      </React.Fragment>
      
    )
  }
}

export default Refs;
