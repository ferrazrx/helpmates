import gql from "graphql-tag";

const GET_NOTIFICATIONS = gql`
  query GET_NOTIFICATIONS {
    notifications {
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

const ADD_COMMENT_ANSWER = gql`
  mutation ADD_COMMENT_ANSWER($answer: String!) {
    addanswer(answer: $answer) {
      message
    }
  }
`;

export { NOTIFICATION_SUBSCRIPTION, GET_NOTIFICATIONS, ADD_COMMENT_ANSWER };
