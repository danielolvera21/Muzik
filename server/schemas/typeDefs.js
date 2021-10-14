const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
    user(username: String): User
    users: [User]
}

type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    friends: [User]
}



type Auth {
    token: ID!
    user: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;