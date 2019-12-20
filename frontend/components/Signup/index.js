import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Router from "next/router";
import { withAlert } from "react-alert";
import _ from "lodash";
import { CREATE_USER, GET_PROVINCES } from "./queries";
import validator from "./validation";
import { Img } from "./style";
import Error from "../ErrorMessage";
import { GET_USER_LOGGED } from "../User/queries";

class Signup extends Component {
  state = {
    isFormValid: true,
    fname: "",
    lname: "",
    password: "",
    email: "",
    line1: "",
    line2: "",
    city: "",
    province: "",
    zip: "",
    sending: false
  };
  validator = {};

  handleChanges = event => {
    const { name, value, type } = event.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handleCreateUser = async (e, createUser) => {
    e.preventDefault();
    this.validator = validator.validate(this.state);
    this.setState({ isFormValid: this.validator.isValid });
    if (this.validator.isValid) {
      const user = await createUser();
      if (user) {
        this.setState({
          isFormValid: true,
          fname: "",
          lname: "",
          password: "",
          email: "",
          line1: "",
          line2: "",
          city: "",
          province: "",
          zip: "",
          sending: true
        });
        this.props.alert.success(`Welcome, ${user.data.signup.fname}!`);
        Router.push({ pathname: "/" });
      } else {
        this.props.alert.error(`Something went wrong, please try again!`);
      }
    }
  };

  render() {
    return (
      <div className="w-80 fade-in">
        <div className="row">
          <div className="col-md-5 position-relative bg-white">
            <Img src="static/img/bg_worker.jpg" alt="worker" />
          </div>
          <div className="col-md-7">
            <h1 className="text-center pt-4">Register</h1>
            <hr />
            <Mutation
              mutation={CREATE_USER}
              variables={{ ...this.state }}
              refetchQueries={[{ query: GET_USER_LOGGED }]}
            >
              {(createUser, { loading, error }) => (
                <form
                  className="d-block px-5"
                  onSubmit={e => this.handleCreateUser(e, createUser)}
                >
                  <Error error={error} />
                  <fieldset disabled={loading || this.state.sending}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="fname">First Name</label>
                        <input
                          onChange={this.handleChanges}
                          autoFocus
                          type="text"
                          name="fname"
                          className={
                            !this.state.isFormValid
                              ? this.validator.fname.isInvalid
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          id="fname"
                          placeholder="First Name..."
                          value={this.state.fname}
                        />
                        <div className="invalid-feedback">
                          {!_.isEmpty(this.validator) &&
                            this.validator.email.message}
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="lname">Last Name</label>
                        <input
                          onChange={this.handleChanges}
                          type="text"
                          name="lname"
                          className={
                            !this.state.isFormValid
                              ? this.validator.lname.isInvalid
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          id="lname"
                          placeholder="Last Name"
                          value={this.state.lname}
                        />
                        <div className="invalid-feedback">
                          {!_.isEmpty(this.validator) &&
                            this.validator.lname.message}
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="email1">Email</label>
                        <input
                          onChange={this.handleChanges}
                          type="email"
                          name="email"
                          className={
                            !this.state.isFormValid
                              ? this.validator.email.isInvalid
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          id="email1"
                          placeholder="Email"
                          value={this.state.email}
                        />
                        <div className="invalid-feedback">
                          {!_.isEmpty(this.validator) &&
                            this.validator.email.message}
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="password1">Password</label>
                        <input
                          onChange={this.handleChanges}
                          type="password"
                          component="input"
                          name="password"
                          className={
                            !this.state.isFormValid
                              ? this.validator.password.isInvalid
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          id="password1"
                          placeholder="Password"
                          value={this.state.password}
                        />
                        {!_.isEmpty(this.validator) && (
                          <small
                            id="passwordHelp"
                            className="form-text text-muted"
                          >
                            Password must contain at least 6 caracters.
                          </small>
                        )}
                        <div className="invalid-feedback">
                          {!_.isEmpty(this.validator) &&
                            this.validator.password.message}
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="inputAddress">Address (Line 1)</label>
                        <input
                          onChange={this.handleChanges}
                          type="text"
                          name="line1"
                          className={
                            !this.state.isFormValid
                              ? this.validator.line1.isInvalid
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          id="inputAddress"
                          placeholder="1234 Main St"
                          value={this.state.line1}
                        />
                        <div className="invalid-feedback">
                          {!_.isEmpty(this.validator) &&
                            this.validator.line1.message}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="inputAddress2">
                            Address (Line 2)
                          </label>
                          <input
                            onChange={this.handleChanges}
                            type="text"
                            name="line2"
                            className={
                              !this.state.isFormValid
                                ? this.validator.line2.isInvalid
                                  ? "form-control is-invalid"
                                  : "form-control"
                                : "form-control"
                            }
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                            value={this.state.line2}
                          />
                          <div className="invalid-feedback">
                            {!_.isEmpty(this.validator) &&
                              this.validator.line2.message}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="inputCity">City</label>
                        <input
                          onChange={this.handleChanges}
                          type="text"
                          name="city"
                          className={
                            !this.state.isFormValid
                              ? this.validator.city.isInvalid
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          id="inputCity"
                          value={this.state.city}
                          placeholder="City"
                        />
                        <div className="invalid-feedback">
                          {!_.isEmpty(this.validator) &&
                            this.validator.city.message}
                        </div>
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">Province</label>
                        <select
                          onChange={this.handleChanges}
                          type="select"
                          name="province"
                          className={
                            !this.state.isFormValid
                              ? this.validator.province.isInvalid
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          id="inputState"
                          value={this.state.province}
                        >
                          <option>Choose a option...</option>
                          <Query query={GET_PROVINCES}>
                            {({ data, loading, error }) => {
                              if (error)
                                return (
                                  <option disabled>
                                    Error! Please, refresh your page!
                                  </option>
                                );
                              if (loading)
                                return <option disabled>Loading</option>;
                              return data.provinces.map(province => {
                                return (
                                  <option key={province.id} value={province.id}>
                                    {province.name}
                                  </option>
                                );
                              });
                            }}
                          </Query>
                        </select>
                        <div className="invalid-feedback">
                          {!_.isEmpty(this.validator) &&
                            this.validator.province.message}
                        </div>
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputZip">Zip Code</label>
                        <input
                          onChange={this.handleChanges}
                          type="text"
                          name="zip"
                          className={
                            !this.state.isFormValid
                              ? this.validator.zip.isInvalid
                                ? "form-control is-invalid"
                                : "form-control"
                              : "form-control"
                          }
                          id="inputZip"
                          value={this.state.zip}
                          placeholder="4RT 3F5P"
                        />
                        <div className="invalid-feedback">
                          {!_.isEmpty(this.validator) &&
                            this.validator.zip.message}
                        </div>
                      </div>
                      {!loading ? (
                        <button className="btn btn-warning my-5">
                          Sign in
                        </button>
                      ) : (
                        <div className="btn btn-warning my-5 disabled">
                          Sending...
                        </div>
                      )}
                    </div>
                  </fieldset>
                </form>
              )}
            </Mutation>
          </div>
        </div>
      </div>
    );
  }
}
export default withAlert(Signup);
