import React from "react";
import { Query } from "react-apollo";
import {
  NOTIFICATION_SUBSCRIPTION,
  GET_NOVIEWED_NOTIFICATIONS
} from "./queries";
import NotificationBell from "./subscription";

import { GET_NOTIFICATIONS } from "../MyNotificationsList/queries";

export default function NotificationBellWithData() {
  return (
    <Query query={GET_NOVIEWED_NOTIFICATIONS} ssr={false}>
      {({ subscribeToMore, client, ...result }) => (
        <NotificationBell
          subscribeToMoreNotification={() => {
            subscribeToMore({
              document: NOTIFICATION_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                let cachedNotifications = client.cache.readQuery({
                  query: GET_NOTIFICATIONS
                });
                if (cachedNotifications.notifications) {
                  client.cache.writeQuery({
                    query: GET_NOTIFICATIONS,
                    data: {
                      notifications: [
                        ...cachedNotifications.notifications,
                        subscriptionData.data.notificationAdded
                      ]
                    }
                  });
                }
                return Object.assign({}, prev, {
                  notifications: [
                    subscriptionData.data.notificationAdded,
                    ...prev.notifications
                  ]
                });
              }
            });
          }}
          {...result}
        />
      )}
    </Query>
  );
}
