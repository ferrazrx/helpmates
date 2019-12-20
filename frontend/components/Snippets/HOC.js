import React from "react";
import { Query } from "react-apollo";
import { GET_SERVICES_LATESTS } from "./queries";

export default function HOC(Component) {
  return class HOC extends React.Component {
    render() {
      return (
        <Query query={GET_SERVICES_LATESTS}>
          {({ data, loading, error }) => {
            if (loading)
              return <Component {...this.props} loading={loading} data={[]} />;
            if (error)
              return <Component {...this.props} error={error} data={[]} />;

            return <Component {...this.props} data={data.services} />;
          }}
        </Query>
      );
    }
  };
}
