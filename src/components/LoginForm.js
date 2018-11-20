import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formOnSubmit = (event) => {
    console.log(this.state.username)
    event.preventDefault();
    if(this.state.username !== "" && this.state.password !== ""){
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.formOnSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.changeHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.changeHandler} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
