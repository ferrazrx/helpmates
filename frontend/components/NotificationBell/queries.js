import gql from "graphql-tag";

const GET_NOVIEWED_NOTIFICATIONS = gql`
  query GET_NOVIEWED_NOTIFICATIONS {
    notifications(where: { viewedAt: null }) {
      id
      label
      message
      createdAt
      viewedAt
      service {
        id
        title
      }
    }
  }
`;
const NOTIFICATION_SUBSCRIPTION = gql`
  subscription NOTIFICATION_SUBSCRIPTION {
    notificationAdded {
      id
      label
      message
      createdAt
      viewedAt
      service {
        id
        title
      }
    }
  }
`;

const UPDATE_NOTIFICATION = gql`
  mutation UPDATE_NOTIFICATION($id: ID!) {
    markNotificationViewed(id: $id) {
      id
      label
      message
      createdAt
      viewedAt
      service {
        id
        title
      }
    }
  }
`;

export {
  NOTIFICATION_SUBSCRIPTION,
  GET_NOVIEWED_NOTIFICATIONS,
  UPDATE_NOTIFICATION
};
