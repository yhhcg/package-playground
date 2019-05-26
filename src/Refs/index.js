import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Refs extends Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();
    console.log('create');
    console.log(this.inputElement);
  }

  componentDidMount() {
    console.log('didMount');
    console.log(this.inputElement);
  }

  render() {
    return (
      <input ref={this.inputElement} />
    )
  }
}

export default Refs;
