import gql from "graphql-tag";

const REQUEST_RESET = gql`
  mutation REQUEST_RESET($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export { REQUEST_RESET };
