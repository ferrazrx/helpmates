import React, { Component } from "react";
import { SERVICES_PAGINATION } from "./queries";
import { Query } from "react-apollo";
import Error from "../ErrorMessage";
import { items_per_page } from "../../configs";
import Link from "next/link";

export default class Pagination extends Component {
  render() {
    return (
      <Query query={SERVICES_PAGINATION}>
        {({
          data,
          loading,
          error
        }) => {
          if (error) return <Error error={error} />;
          if (loading)
            return (
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" tabIndex="-1">
                      Loading...
                    </a>
                  </li>
                </ul>
              </nav>
            );
          if(data.servicesConnection){
            const {count} = data.servicesConnection.aggregate 
            const page =
            this.props.page > Math.ceil(count / items_per_page)
              ? Math.ceil(count / items_per_page)
              : this.props.page;
          const pages = Math.ceil(count / items_per_page);
          return (
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                {page > 1 && (
                  <li className="page-item">
                    <Link
                      href={{
                        pathname: "/services",
                        query: { page: page - 1 }
                      }}
                      prefetch
                    >
                      <a className="page-link" tabindex="-1">
                        <i className="fas fa-arrow-left" /> Previous
                      </a>
                    </Link>
                  </li>
                )}

                <li className="page-item">
                  <a className="page-link" href="#">
                    Page {page} of {pages}
                  </a>
                </li>
                {page < pages && (
                  <li className="page-item">
                    <Link
                      href={{
                        pathname: "/services",
                        query: { page: page + 1 }
                      }}
                      prefetch
                    >
                      <a className="page-link">
                        Next <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          );
          }
        }}
      </Query>
    );
  }
}
