import gql from "graphql-tag";

const GET_SERVICE = gql`
  query GET_SERVICE($id: ID!) {
    service(where: { id: $id }) {
      title
      description
      maxPayment
      images
      createdAt
      author {
        fname
      }
      category {
        id
        name
      }
      comments {
        author {
          fname
        }
        question
        answers
        createdAt
      }
    }
    canEditPost(where: { id: $id })
  }
`;

const ADD_COMMENT = gql`
  mutation ADD_COMMENT($question: String!, $service: ID!) {
    addComment(question: $question, service: $service) {
      author {
        fname
      }
      question
      answers
      createdAt
    }
  }
`;

const ADD_BID = gql`
  mutation ADD_BID($service: ID!, $date: DateTime!, $payment: Float!) {
    addBid(
      data: { service: $service, possibleDate: $date, payment: $payment }
    ) {
      service {
        title
      }
      payment
      possibleDate
    }
  }
`;
export { GET_SERVICE, ADD_COMMENT, ADD_BID };
