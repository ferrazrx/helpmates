import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import Error from "../ErrorMessage";
import { GET_NOTIFICATIONS, ADD_COMMENT_ANSWER } from "./queries";
import { ServicesWrapper } from "../Services/style";
import timestamp from "../../lib/timestamp";
import Link from "next/link";
import { NotificationContainer, New, AnswerContainer } from "./style";

export default class MyNotificationsList extends Component {
  state = { position: 0 };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Query
        query={GET_NOTIFICATIONS}
        fetchPolicy="cache-and-network"
        ssr={false}
      >
        {({ data, loading, error }) => {
          if (error) return <Error error={error} />;
          if (loading)
            return (
              <ServicesWrapper>
                <div className="alert alert-warning" role="alert">
                  Looking for notifications...
                  <i className="fas fa-cog fa-spin" />
                </div>
              </ServicesWrapper>
            );
          return (
            <>
              <h1>My Notifications</h1>
              <hr />
              {data.notifications < 1 && (
                <ServicesWrapper>
                  <div className="alert alert-warning" role="alert">
                    You don't have any notifications at the moment.
                  </div>
                </ServicesWrapper>
              )}
              {data.notifications.map((notification, i) => (
                <NotificationContainer key={i} className="card mt-2">
                  {!notification.viewedAt && (
                    <New src="/static/img/new.svg" alt="new" />
                  )}

                  <div className="card-header">
                    {notification.label}{" "}
                    <small>
                      - Created{" "}
                      <cite title="Source Title">
                        {timestamp(new Date(notification.createdAt))}
                      </cite>
                    </small>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <div className="row">
                        <div className="col-9">
                          <h6>
                            <Link
                              href={{
                                pathname: `/service`,
                                query: { id: notification.service.id }
                              }}
                            >
                              <a>{notification.service.title}</a>
                            </Link>
                          </h6>
                          <p>"{notification.message}"</p>
                        </div>
                        <div className="col-3">
                          {i + 1 !== this.state.position && (
                            <button
                              onClick={() =>
                                this.setState({
                                  toggleAnswerContainer: !this.state
                                    .toggleAnswerContainer,
                                  position: i + 1
                                })
                              }
                              className="btn btn-warning mt-1 mr-1"
                            >
                              Answer
                            </button>
                          )}
                        </div>
                      </div>
                      {i + 1 === this.state.position && (
                        <AnswerContainer>
                          <Mutation mutation={ADD_COMMENT_ANSWER}>
                            {() => (
                              <>
                                <textarea
                                  onChange={this.handleChange}
                                  className="form-control"
                                  placeholder="Your answer..."
                                />
                                <button className="btn btn-warning mt-1 mr-1">
                                  Add Message
                                </button>
                                <Link
                                  href={{
                                    pathname: `/service`,
                                    query: { id: notification.service.id }
                                  }}
                                >
                                  <a className="btn btn-secondary mt-1 mr-1">
                                    View on Service
                                  </a>
                                </Link>
                              </>
                            )}
                          </Mutation>
                        </AnswerContainer>
                      )}
                    </blockquote>
                  </div>
                </NotificationContainer>
              ))}
            </>
          );
        }}
      </Query>
    );
  }
}
