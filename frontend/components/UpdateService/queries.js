import gql from "graphql-tag";

const UPDATE_SERVICE = gql`
  mutation UPDATE_SERVICE(
    $id: ID!
    $title: String
    $description: String
    $maxPayment: Float
    $images: [Upload]
    $category: ID
  ) {
    updateService(
      data: {
        title: $title
        description: $description
        maxPayment: $maxPayment
        images: $images
        category: $category
      }
      where: { id: $id }
    ) {
      id
      title
      description
      maxPayment
      images
      category {
        id
        name
      }
    }
  }
`;

const GET_SERVICE_CATEGORIES = gql`
  query GET_SERVICE_CATEGORIES($id: ID!) {
    service(where: { id: $id }) {
      title
      description
      maxPayment
      images
      category {
        id
        name
      }
    }
    categories {
      id
      name
    }
  }
`;

export { UPDATE_SERVICE, GET_SERVICE_CATEGORIES };
