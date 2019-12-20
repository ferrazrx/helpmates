import React, { Component } from "react";
import { Query } from "react-apollo";
import Link from "next/link";
import PropTypes from "prop-types";
import DeleteService from "../DeleteService";
import { MY_SERVICES } from "./queries";
import Error from "../ErrorMessage";
import Service from "../Service";
import { ServicesWrapper } from "../Services/style";

export default class MyServicesList extends Component {
  render() {
    return (
      <Query query={MY_SERVICES} variables={{ id: this.props.id }}>
        {({ data, loading, error }) => {
          if (loading)
            return (
              <ServicesWrapper>
                <div className="alert alert-warning" role="alert">
                  Looking for services...
                  <i className="fas fa-cog fa-spin" />
                </div>
              </ServicesWrapper>
            );
          if (error) return <Error error={error} />;
          if (data.myServices) {
            const { myServices } = data;
            return (
              <>
                <h1>My Services</h1>
                <hr />
                <div className="list-group">
                  {myServices.length < 1 && (
                    <div className="alert alert-warning" role="alert">
                      No services were found! To add a service{" "}
                      <Link href="/create">
                        <a>click here!</a>
                      </Link>
                    </div>
                  )}
                  {myServices.map(service => (
                    <Service key={service.id} {...service}>
                      <Link
                        href={{
                          pathname: "/update",
                          query: { id: service.id }
                        }}
                      >
                        <a className="text-info">
                          <i className="far fa-edit" />
                        </a>
                      </Link>
                      <DeleteService id={service.id}>
                        <i className="far fa-trash-alt text-danger" />
                      </DeleteService>
                    </Service>
                  ))}
                </div>
              </>
            );
          }
        }}
      </Query>
    );
  }
}
