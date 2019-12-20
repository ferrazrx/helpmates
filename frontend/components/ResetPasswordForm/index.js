import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Router from "next/router";
import PropTypes from "prop-types";
import _ from "lodash";
import { withAlert } from "react-alert";
import { RESET_PASSWORD } from "./queries";
import Error from "../ErrorMessage";
import { GET_USER_LOGGED } from "../User/queries";

class ResetPasswordForm extends Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired
  };
  state = { password: "", confirm: "", isFormValid: true };
  validator = {};

  handleSubmit = async (e, resetPassword) => {
    e.preventDefault();
    console.log(this.props.resetToken);
    const res = await resetPassword();
    if (res.data.resetPassword) {
      Router.push("/");
      this.props.alert.success(`Your password was successfully reseted!`);
      this.setState({ password: "", confirm: "", isFormValid: true });
    }
  };

  handleChanges = e => {
    const { name, type, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="my-3 container bg-white shadow-sm p-5">
        <h1>Reset Password</h1>
        <hr />
        <p>Enter your new password to reset your old one.</p>
        <Mutation
          mutation={RESET_PASSWORD}
          variables={{ ...this.state, resetToken: this.props.resetToken }}
          refetchQueries={[{ query: GET_USER_LOGGED }]}
        >
          {(resetPassword, { loading, error, called }) => (
            <form
              method="POST"
              className="d-block px-5"
              onSubmit={e => {
                this.handleSubmit(e, resetPassword);
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={this.handleChanges}
                      autoFocus
                      type="password"
                      name="password"
                      className={
                        !this.state.isFormValid
                          ? this.validator.password.isInvalid
                            ? "form-control is-invalid"
                            : "form-control"
                          : "form-control"
                      }
                      id="password"
                      placeholder="New Password"
                      value={this.state.password}
                    />
                    <div className="invalid-feedback">
                      {!_.isEmpty(this.validator) &&
                        this.validator.password.message}
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="confirm">Confirm</label>
                    <input
                      onChange={this.handleChanges}
                      type="password"
                      name="confirm"
                      className={
                        !this.state.isFormValid
                          ? this.validator.confirm.isInvalid
                            ? "form-control is-invalid"
                            : "form-control"
                          : "form-control"
                      }
                      id="confirm"
                      placeholder="Confirm password"
                      value={this.state.confirm}
                    />
                    <div className="invalid-feedback">
                      {!_.isEmpty(this.validator) &&
                        this.validator.confirm.message}
                    </div>
                  </div>
                  {!loading ? (
                    <button className="btn btn-warning my-5">
                      Reset Password
                    </button>
                  ) : (
                    <div className="btn btn-warning my-5 disabled">
                      Reseting...
                    </div>
                  )}
                </div>
              </fieldset>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default withAlert(ResetPasswordForm);
