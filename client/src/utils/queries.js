import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
  query reviews($username: String) {
    reviews(username: $username) {
      _id
      reviewText
      createdAt
      username
    }
  }
`;
