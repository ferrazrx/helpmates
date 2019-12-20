import * as React from "react";
import { Query, ApolloConsumer } from "react-apollo";
import { GET_USER_LOGGED } from "../User/queries";
import Modal from "../Modal";
import Signin from "../Signin";
import Error from "../ErrorMessage";



const authentication = <P extends object>(Component: React.ComponentType<P>) => {
  return class WrapperComponent extends React.Component<P> {
    render() {
      return (
        <Query {...this.props} query={GET_USER_LOGGED} ssr={false}>
          {({ data, loading, error }) => {
            if (error) {
              return <Error error={error} />;
            }
            if (loading) {
              return (
                <div
                  className="container alert alert-light p-5 shadow-sm py-5 py-5 my-5"
                  role="alert"
                >
                  <h1>
                    We are finding your request...
                    <i className="fas fa-cog fa-spin" />
                  </h1>
                </div>
              );
            }
            if (!data.loggedUser)
              return (
                <Modal opened={true} routeOnClose={"/"}>
                  {closeModal => (
                    <ApolloConsumer>
                      {client => (
                        <Signin
                          client={client}
                          closeModal={closeModal}
                          className="d-block mx-auto"
                          routeOnClose={"/"}
                        />
                      )}
                    </ApolloConsumer>
                  )}
                </Modal>
              );
            return <Component {...this.props} />;
          }}
        </Query>
      );
    }
  };
}
export default authentication;