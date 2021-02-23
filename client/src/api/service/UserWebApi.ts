import gql from 'graphql-tag';
import type GraphQLClient from '../adapter/GraphQLClient';
import { Query } from '../../types';

class UserWebApi {
  private graphqlClient: GraphQLClient;

  constructor({ graphqlClient }: { graphqlClient: GraphQLClient }) {
    // graphqlClient = GraphQLClient.ts
    this.graphqlClient = graphqlClient;
  }

  public getMe = async (): Promise<Query['users']> => {
    let result: { users: Query['users'] };
    try {
      result = await this.graphqlClient.query(
        gql`
          query {
            users {
              name
              id
            }
          }
        `
      );
    } catch (err) {
      throw err;
    }
    return result.users;
  };
}

export { UserWebApi };
