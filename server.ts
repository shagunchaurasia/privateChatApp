import { ApolloServer, gql } from "apollo-server";
import crypto from "crypto";

const typeDefs = gql`
  type Query {
    greet: String
    users: [User]
    user(id: ID!): User
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(userNew: UserInput!): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    toDos: [ToDo]
  }

  type ToDo {
    title: String!
    by: ID!
  }
`;

const users = [
  {
    id: "2324889",
    firstName: "Shagun",
    lastName: "Chaurasia",
    email: "chaurasia.shagun@gmail.com",
    password: "Shagun",
  },
  {
    id: "23432487",
    firstName: "Rohit",
    lastName: "Chaurasia",
    email: "rohit.chaurasia997@gmail.com",
    password: "Rohit",
  },
];

const toDos = [
  {
    title: "Buy Book",
    by: "2324889",
  },
  {
    title: "Write Code",
    by: "23432487",
  },
  {
    title: "Complete Course",
    by: "23432487",
  },
];

const resolvers = {
  Query: {
    greet: () => "Hello world!",
    users: () => users,
    user: (parent: any, args: any, context: any) => {
      console.log(args.id);
      console.log(users);
      const {userLoggedIn} = context;
      if(!userLoggedIn){
        throw new Error("You are not logged in")
      }
      return users.find((item) => item.id == args.id);
    },
  },
  User: {
    toDos: (parent: any) => {
      console.log(parent);
      return toDos.filter((item) => item.by == parent.id);
    },
  },
  Mutation: {
    createUser: (parent: any, args: any) => {
      // crypto.randomUUID();
      const newUser = {
        id: crypto.randomUUID(),
        ...args.userNew,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { userLoggedIn: false },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
