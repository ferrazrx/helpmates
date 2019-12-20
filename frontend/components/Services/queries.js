import gql from "graphql-tag";
import { items_per_page } from "../../configs";

const GET_SERVICES = gql`
  query GET_SERVICES($skip: Int = 0, $first: Int = ${items_per_page}) {
    services(first: $first, skip: $skip, orderBy: createdAt_DESC ) {
      id
      title
      description
      images
      createdAt
      category {
        name
      }
    }
  }
`;

export { GET_SERVICES };
