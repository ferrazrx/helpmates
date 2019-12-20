import React, { Component } from "react";
import { ActiveBell, InactiveBell, Amount } from "./style";
import { Mutation } from "react-apollo";
import Link from "next/link";
import timestamp from "../../lib/timestamp";
import Error from "../ErrorMessage";
import { UPDATE_NOTIFICATION, GET_NOVIEWED_NOTIFICATIONS } from "./queries";

export default class NotificationBell extends Component {
  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = this.props.subscribeToMoreNotification();
  }

  componentWillUnmount = () => {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  };

  handleUpdateNotification = (
    cache,
    {
      data: {
        markNotificationViewed: { id }
      }
    }
  ) => {
    let { notifications } = cache.readQuery({
      query: GET_NOVIEWED_NOTIFICATIONS
    });

    notifications = notifications.filter(
      notification => notification.id !== id
    );

    cache.writeQuery({
      query: GET_NOVIEWED_NOTIFICATIONS,
      data: {
        notifications
      }
    });
  };

  render() {
    const { error, loading, data } = this.props;
    if (error) return <Error error={error} />;
    if (loading || !data || data.notifications.length < 1)
      return (
        <div className="dropdown">
          <InactiveBell
            id="dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-bell" />
          </InactiveBell>
          <div className="dropdown-menu">
            <div className="alert alert-warning dropdown-item" role="alert">
              You don't have new notifications!
            </div>
            <hr />
            <Link href="/mynotifications">
              <a className="dropdown-item">
                <i className="far fa-comments" /> See all notifications.
              </a>
            </Link>
          </div>
        </div>
      );

    return (
      <div className="dropdown">
        <ActiveBell
          id="dropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-bell text-dark" />
          <Amount>{data.notifications.length}</Amount>
        </ActiveBell>
        <Mutation
          mutation={UPDATE_NOTIFICATION}
          update={this.handleUpdateNotification}
        >
          {(updateNotification, { error, loading, client }) => (
            <div className="dropdown-menu">
              {data.notifications.map((notification, i) => (
                <div key={i}>
                  <Link
                    href={{
                      pathname: "/service",
                      query: { id: notification.service.id }
                    }}
                  >
                    <a
                      onClick={() =>
                        updateNotification({
                          variables: { id: notification.id }
                        })
                      }
                      className="dropdown-item"
                    >
                      {notification.label}
                      <br />
                      <small className="mr-auto pr-3">
                        {notification.service.title}
                      </small>
                      <small>
                        {timestamp(new Date(notification.createdAt))}
                      </small>
                    </a>
                  </Link>
                  <hr />
                </div>
              ))}
              <Link href="/mynotifications">
                <a className="dropdown-item">
                  <i className="far fa-comments" /> See all notifications.
                </a>
              </Link>
            </div>
          )}
        </Mutation>
      </div>
    );
  }
}
