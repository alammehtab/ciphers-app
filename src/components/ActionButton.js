import React, { Component } from "react";

class EncryptButton extends Component {
  // constructor function for state initialization
  constructor(props) {
    super(props);
    this.state = { buttonText: "Encrypt" };
  }

  // function for changing button text on click event
  onButtonClick = () => {
    this.setState({ buttonText: "Decrypt" });
  };

  // we have to define render function it is react's requirement
  render() {
    return (
      <button onClick={this.onButtonClick} className="btn btn-primary">
        {this.state.buttonText}
      </button>
    );
  }
}

export default EncryptButton;
