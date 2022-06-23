import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oxyvjn17a101xn27g159bl/master',
  cache: new InMemoryCache()
}) 