import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Query } from "react-apollo";
import Link from "next/link";
import { GET_SERVICES } from "./queries";
import { ServicesWrapper, AddServiceButton } from "./style";
import Service from "../Service";
import Pagination from "../Pagination";
import { items_per_page } from "../../configs";

export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Services | Help Mates</title>
        </Head>
        <div className="container">
          <Query
            query={GET_SERVICES}
            variables={{
              skip: this.props.page * items_per_page - items_per_page
            }}
          >
            {({ loading, error, data }) => {
              if (loading)
                return (
                  <ServicesWrapper>
                    <div className="alert alert-warning" role="alert">
                      Looking for services...
                      <i className="fas fa-cog fa-spin" />
                    </div>
                  </ServicesWrapper>
                );
              if (error)
                return (
                  <ServicesWrapper>
                    <div className="alert alert-danger" role="alert">
                      Something went wrong! Try refreshing your page... that
                      might help!
                    </div>
                  </ServicesWrapper>
                );
              if (!data.services || data.services.length === 0)
                return (
                  <ServicesWrapper>
                    <div className="row">
                      <div className="col-md-8 d-flex justify-content-center align-items-center">
                        <div className="alert alert-warning" role="alert">
                          No services were found! Be the first to add services.{" "}
                          <Link href="/create">
                            <a>Click here!</a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <img
                          className="w-100"
                          src="static/img/mechanic.jpg"
                          alt="mechanic man"
                        />
                      </div>
                    </div>
                  </ServicesWrapper>
                );

              return (
                <div className="row">
                  <div className="col-md-4">
                    <ServicesWrapper>
                      <p>
                        <strong>Current Jobs Matches</strong>
                        <span className="mx-2 badge badge-warning py-1">
                          <i className="fas fa-briefcase" />
                          {` ${data.services.length} jobs`}
                        </span>
                      </p>
                      <hr />
                    </ServicesWrapper>
                  </div>

                  <div className="col-md-8">
                    <ServicesWrapper>
                      <AddServiceButton>
                        <Link href="/create">
                          <a className="text-warning">
                            <i className="far fa-plus-square p-0 m-0" /> NEW
                          </a>
                        </Link>
                      </AddServiceButton>
                      <p>
                        You are here:{" "}
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                        ->Services
                      </p>
                      <div className="list-group">
                        {data.services.map(service => (
                          <Service key={service.id} {...service} />
                        ))}
                      </div>
                    </ServicesWrapper>
                    <Pagination page={this.props.page} />
                  </div>
                </div>
              );
            }}
          </Query>
        </div>
      </Fragment>
    );
  }
}
