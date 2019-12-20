import gql from "graphql-tag";

const SIGNOUT = gql`
  mutation SIGNOUT {
    signout {
      message
    }
  }
`;

export { SIGNOUT };
