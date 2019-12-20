import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withAlert } from "react-alert";
import Router from "next/router";
import { SIGNOUT } from "./queries";
import { GET_USER_LOGGED } from "../User/queries";
import { Button } from "./style";

class Signout extends Component {
  handleSignout = async (signout, client) => {
    const confirmation = confirm("Are you sure you want to sign out?");
    if (confirmation) {
      const res = await signout();
      this.props.alert.success(res.data.signout.message);
      Router.push("/");
    }
  };

  componentWillUnmount = () => {
    this.props.client.resetStore();
  };
  render() {
    return (
      <Mutation
        mutation={SIGNOUT}
        refetchQueries={[{ query: GET_USER_LOGGED }]}
        awaitRefetchQueries={true}
      >
        {(signout, { loading, error, client }) => {
          if (loading)
            return (
              <div className="nav-link">
                Signing out... <i className="fas fa-cog fa-spin" />
              </div>
            );
          return (
            <Button
              className="nav-link"
              onClick={e => this.handleSignout(signout, client)}
            >
              Sign out
            </Button>
          );
        }}
      </Mutation>
    );
  }
}

export default withAlert(Signout);
