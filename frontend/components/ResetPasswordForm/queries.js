import gql from "graphql-tag";

const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD(
    $password: String!
    $confirm: String!
    $resetToken: String!
  ) {
    resetPassword(
      password: $password
      confirm: $confirm
      resetToken: $resetToken
    ) {
      email
    }
  }
`;

export { RESET_PASSWORD };
