import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  changeHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={this.changeHandler}/>
        <small>{this.props.maxChars - this.state.message.length} characters left</small>
      </div>
    );
  }
}

export default TwitterMessage;
