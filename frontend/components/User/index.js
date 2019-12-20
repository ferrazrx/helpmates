import React from "react";
import { Query } from "react-apollo";
import { GET_USER_LOGGED } from "./queries";
import PropTypes from "prop-types";
import Error from "../ErrorMessage";

const User = props => (
  <Query query={GET_USER_LOGGED} ssr={false}>
    {({ data, error, loading }) => {
      if (error) return <Error error={error} />;
      if (loading)
        return (
          <p>
            Loading...
            <i className="fas fa-cog fa-spin" />
          </p>
        );
      return props.children(data);
    }}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
