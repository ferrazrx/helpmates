import gql from "graphql-tag";

const SIGNIN = gql`
  mutation SIGNIN($email: String!, $password: String!) {
    signin(password: $password, email: $email) {
      id
      fname
    }
  }
`;

export { SIGNIN };
