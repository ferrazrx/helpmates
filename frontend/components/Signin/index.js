import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withAlert } from "react-alert";
import Router from "next/router";
import { CloseButton, Button } from "./style";
import { SIGNIN } from "./queries";
import Error from "../ErrorMessage";
import { GET_USER_LOGGED } from "../User/queries";
import ResetPassword from "../ResetPasswordRequest";
import { Fadein } from "../ResetPasswordRequest/style";
import PropTypes from "prop-types";

class Signin extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    routeOnClose: PropTypes.string
  };

  state = {
    email: "",
    password: "",
    resetForm: false
  };

  handleReset = () => {
    this.setState(prevState => ({ resetForm: !prevState.resetForm }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signin = async (e, signin, client) => {
    e.preventDefault();
    const user = await signin();
    if (user.data.signin.id) {
      this.setState({});
      this.props.closeModal();
      this.props.alert.success(`Welcome back, ${user.data.signin.fname}!`);
    }
  };

  routeOnClose = () => {
    Router.push(this.props.routeOnClose);
  };

  refetchQueries = async result => {
    await this.props.client.resetStore();
    return [{ query: GET_USER_LOGGED }];
  };

  render() {
    if (!this.state.resetForm) {
      return (
        <Mutation
          mutation={SIGNIN}
          variables={{ ...this.state }}
          refetchQueries={this.refetchQueries}
          awaitRefetchQueries={true}
        >
          {(signin, { loading, error, client }) => (
            <Fadein className="bg-white p-5">
              <Error error={error} />
              <form
                method="post"
                onSubmit={e => this.signin(e, signin, client)}
              >
                <fieldset disabled={loading}>
                  <div className="form-group position-relative">
                    <CloseButton
                      onClick={
                        this.props.routeOnClose
                          ? this.routeOnClose
                          : this.props.closeModal
                      }
                    >
                      <i className="fas fa-times" />
                    </CloseButton>
                    <h1 className="text-center">Login</h1>
                    <hr />
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      onChange={this.handleChange}
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="example@gmail.com"
                      vale={this.state.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      onChange={this.handleChange}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary ${loading && "disabled"}`}
                  >
                    {`Submit${loading ? "ing..." : ""}`}{" "}
                    {loading && <i className="fas fa-cog fa-spin" />}
                  </button>
                  <div
                    onClick={
                      this.props.routeOnClose
                        ? this.routeOnClose
                        : this.props.closeModal
                    }
                    className="btn btn-secondary ml-1"
                  >
                    Back
                  </div>
                </fieldset>
              </form>
              <hr />
              <Button onClick={this.handleReset}>
                <p>Do you fogot your password? Reset it here!</p>
              </Button>
            </Fadein>
          )}
        </Mutation>
      );
    } else {
      return (
        <ResetPassword
          back={this.handleReset}
          closeModal={this.props.closeModal}
        />
      );
    }
  }
}

export default withAlert(Signin);
