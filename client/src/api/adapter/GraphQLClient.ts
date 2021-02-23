// Adapter / GraphQLClient.ts

import { ApolloLink, DocumentNode, execute, makePromise } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';

class GraphQLClient {
  private readonly httpLink: ApolloLink;

  constructor({ endpointUrl }: { endpointUrl: string }) {
    this.httpLink = createHttpLink({ uri: endpointUrl });
  }

  query = async (query: DocumentNode): Promise<any> => {
    try {
      const result = await makePromise(
        execute(this.httpLink, {
          query,
        })
      );

      if (result.errors) {
        console.error(result.errors);
      }

      return result.data;
    } catch (err) {
      throw err;
    }
  };
}

export default GraphQLClient;
