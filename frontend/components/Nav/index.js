import React, { Component } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Link from "next/link";
import { ApolloConsumer } from "react-apollo";
import { NavWrapper } from "./style";
import User from "../User";
import Signin from "../Signin";
import Signout from "../Signout";
import Modal from "../Modal";
import NotificationBell from "../NotificationBell";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

export default class Nav extends Component {
  render() {
    return (
      <NavWrapper className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link href="/">
            <a className="navbar-brand">
              <img className="w-50" src="static/img/logo.svg" />
            </a>
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <form className="form-inline mr-auto my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-warning my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <User>
              {({ loggedUser }) =>
                loggedUser ? (
                  <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item">
                      <NotificationBell className="nav-link" />
                    </li>
                    <li className="nav-item">
                      <p className="nav-link text-dark">
                        Hello, {loggedUser.fname}
                      </p>
                    </li>

                    <li className="nav-item">
                      <Link
                        href={{
                          pathname: "/myservices"
                        }}
                      >
                        <a className="nav-link">My Account</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <ApolloConsumer>
                        {client => <Signout client={client} />}
                      </ApolloConsumer>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <Link href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/signup">
                        <a className="nav-link">Register Now!</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Modal style={"nav-link"} link={"Login"}>
                        {closeModal => (
                          <ApolloConsumer>
                            {client => (
                              <Signin
                                client={client}
                                closeModal={closeModal}
                                className="d-block mx-auto"
                              />
                            )}
                          </ApolloConsumer>
                        )}
                      </Modal>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                )
              }
            </User>
          </div>
        </nav>
      </NavWrapper>
    );
  }
}
