import React from "react";
import Logo from "./Logo/Logo";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.login = this.login.bind(this);
  }

  setValue(fieldName, e) {
    this.setState({
      [fieldName]: e.target.value,
    });
  }

  login = (e) => e.preventDefault();

  render() {
    return (
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="mt-5 text-center">
              <Logo />
            </div>
            <div className="row">
              <div className="offset-3 col-6">
                <form>
                  <div className="form-group mt-5">
                    <label htmlFor="email-input">Email address</label>
                    <input
                      type="email"
                      className="form-control mt-3"
                      id="email-input"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setValue("email", e);
                      }}
                    />
                  </div>
                  <div className="form-group mt-5">
                    <label htmlFor="password-input">Password</label>
                    <input
                      type="password"
                      className="form-control mt-3"
                      id="password-input"
                      placeholder="Password"
                      onChange={(e) => {
                        this.setValue("password", e);
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-5 "
                      onClick={this.login}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
