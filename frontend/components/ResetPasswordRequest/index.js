import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { CloseButton } from "../Signin/style";
import { REQUEST_RESET } from "./queries";
import Error from "../ErrorMessage";
import { withAlert } from "react-alert";
import { Fadein } from "./style";

class ResetPassword extends Component {
  state = {
    email: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  requestReset = async (e, requestReset) => {
    e.preventDefault();
    const result = await requestReset();
    if (result.data.requestReset.message) {
      this.props.closeModal();
      this.props.alert.success(result.data.requestReset.message);
    }
  };

  render() {
    return (
      <Mutation mutation={REQUEST_RESET} variables={{ ...this.state }}>
        {(requestReset, { loading, error }) => (
          <Fadein className="bg-white p-5">
            <Error error={error} />
            <form
              method="post"
              onSubmit={e => this.requestReset(e, requestReset)}
            >
              <fieldset disabled={loading}>
                <div className="form-group position-relative">
                  <CloseButton onClick={this.props.closeModal}>
                    <i className="fas fa-times" />
                  </CloseButton>
                  <h1 className="text-center">Reset Password</h1>
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
                <button
                  type="submit"
                  className={`btn btn-primary ${loading && "disabled"}`}
                >
                  {`Request${loading ? "ing..." : ""}`}
                </button>
                <button
                  onClick={this.props.back}
                  className="btn btn-secondary ml-1"
                >
                  Back
                </button>
                <hr />
              </fieldset>
            </form>
          </Fadein>
        )}
      </Mutation>
    );
  }
}

export default withAlert(ResetPassword);
