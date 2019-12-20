import gql from "graphql-tag";

const CREATE_SERVICE = gql`
  mutation CREATE_SERVICE(
    $title: String!
    $description: String!
    $maxPayment: Float!
    $images: [Upload]!
    $category: ID!
  ) {
    createService(
      data: {
        title: $title
        description: $description
        maxPayment: $maxPayment
        images: $images
        category: { connect: { id: $category } }
      }
    ) {
      id
      title
      description
      images
      category {
        name
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories {
      id
      name
    }
  }
`;

export { CREATE_SERVICE, GET_CATEGORIES };
