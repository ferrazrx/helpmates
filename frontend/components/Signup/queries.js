import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation CREATE_USER(
    $fname: String!
    $lname: String!
    $email: String!
    $password: String!
    $line1: String!
    $line2: String
    $city: String!
    $province: ID!
    $zip: String!
  ) {
    signup(
      data: {
        fname: $fname
        lname: $lname
        password: $password
        email: $email
        address: {
          create: {
            line1: $line1
            line2: $line2
            city: $city
            province: { connect: { id: $province } }
            zip: $zip
          }
        }
      }
    ) {
      id
      fname
    }
  }
`;

const GET_PROVINCES = gql`
  query GET_PROVINCES {
    provinces {
      id
      name
    }
  }
`;

export { CREATE_USER, GET_PROVINCES };
