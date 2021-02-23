import { gql } from 'apollo-server';

export default gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every User in our data source.
  type User {
    id: Int!
    name: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "ysers" query returns an array of zero or more users (defined above).
  type Query {
    users: [User]
  }
`;
