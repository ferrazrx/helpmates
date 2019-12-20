import gql from "graphql-tag";

const DELETE_SERVICE = gql`
  mutation DELETE_SERVICE($id: ID!) {
    deleteService(where: { id: $id }) {
      id
    }
  }
`;

export { DELETE_SERVICE };
