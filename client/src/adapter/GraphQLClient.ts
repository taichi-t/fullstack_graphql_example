import { ApolloLink, execute } from 'apollo-link';
import { BatchHttpLink } from 'apollo-link-batch-http';

class GraphQLClient {
  private readonly httpLink: ApolloLink;

  constructor({ endpointUrl }: { endpointUrl: string }) {
    this.httpLink = new BatchHttpLink({ uri: endpointUrl });
  }

  query = async (
    query: any,
    variables: Record<string, any> = {}
  ): Promise<Record<string, any>> => {
    try {
      const result = execute(this.httpLink, {
        query,
        variables,
      });

      if (result.errors) {
        console.error(result.errors);
      }

      return result.data as Record<string, any>;
    } catch (err) {
      throw err;
    }
  };
}

export default GraphQLClient;
