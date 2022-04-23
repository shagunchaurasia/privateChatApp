import jwt from "jsonwebtoken";
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (request: any) => {
    const {authorization} = request.req.headers;
    if (authorization) {
      const decodedString = jwt.verify(authorization, process.env.JWT_SECRET!);
      return decodedString

    }
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
