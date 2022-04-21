import {gql} from 'apollo-server';

const typeDefs = gql`
  type Query {
    greet: String
  }


`;


export default typeDefs;