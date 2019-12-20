import gql from "graphql-tag";

const SERVICES_PAGINATION = gql`
  query SERVICES_PAGINATION {
    servicesConnection {
      aggregate {
        count
      }
    }
  }
`;

export { SERVICES_PAGINATION };
