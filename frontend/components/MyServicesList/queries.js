import gql from "graphql-tag";

const MY_SERVICES = gql`
  query MY_SERVICES {
    myServices(orderBy: createdAt_DESC) {
      id
      title
      description
      maxPayment
      category {
        name
      }
      images
      thumbnail
      author {
        fname
      }
      bids {
        id
      }
      createdAt
      updatedAt
    }
  }
`;

export { MY_SERVICES };
