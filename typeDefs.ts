import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User,
    messagesByUser(receiverId: Int!):[Message]
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input UserSignInInput {
    email: String!
    password: String!
  }
  type Token {
    token: String!
  }

  scalar Date

  type Message {
    id: ID!
    text: String!
    receiverId: Int!
    senderId: Int!
    createdAt: Date!
  }
  type Mutation {
    signUpUser(userNew: UserInput!): User
    signInUser(userDetails: UserSignInInput!): Token
    createMessage(receiverId: Int!, text: String): Message
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

`;

export default typeDefs;
