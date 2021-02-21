import gql from 'graphql-tag';
import GraphQLClient from '../adapter/GraphQLClient';

class UserWebApi {
  private graphqlClient: GraphQLClient;

  constructor({ graphqlClient }: { graphqlClient: GraphQLClient }) {
    // graphqlClient = GraphQLClient.ts
    this.graphqlClient = graphqlClient;
  }

  public getMe = async (): Promise<DirectorUser> => {
    let result: any;

    try {
      result = await this.graphqlClient.query(
        gql`
          query User {
            me {
              id
              name
            }
          }
        `
      );
    } catch (err) {
      throw err;
    }

    return User.fromJSON(result.me);
  };
}

export default UserWebApi;
