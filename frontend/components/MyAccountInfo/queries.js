import gql from "graphql-tag";

const GET_LOCAL_USER_LOGGED = gql`
  query GET_USER_LOGGED {
    loggedUser @client {
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

export { GET_LOCAL_USER_LOGGED };
