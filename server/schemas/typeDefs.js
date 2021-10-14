const { gql } = require("apollo-server-express");

// moved type User above type Query - 21.1.6 says to do so, ask group members
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    reviews: [Review]
    friends: [User]
  }

  type Review {
      _id: ID
      reviewText: String
      createdAt: String
      username: String
    reviews(username: String): [Review]
  }

  type Query {
    me: User
    user(username: String): User
    users: [User]
    reviews(username: String): [Review]
    review(_id: ID!): Review
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
