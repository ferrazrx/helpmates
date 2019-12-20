import gql from "graphql-tag";

const GET_USER_LOGGED = gql`
  query GET_USER_LOGGED {
    loggedUser {
      id
      fname
      lname
      email
      address {
        line1
        line2
        zip
        city
        province {
          name
        }
      }
    }
  }
`;

export { GET_USER_LOGGED };
