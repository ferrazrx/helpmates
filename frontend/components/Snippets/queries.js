import gql from "graphql-tag";

const GET_SERVICES_LATESTS = gql`
  query GET_SERVICES_LATESTS($skip: Int = 0, $first: Int = 5) {
    services(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      images
      createdAt
      category {
        name
      }
    }
  }
`;

export { GET_SERVICES_LATESTS };
