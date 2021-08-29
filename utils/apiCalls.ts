import { GraphQLClient, gql } from "graphql-request";

const spaceID = process.env.CONTENTFUL_SPACE_ID;
const contentfulToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const API_URL = `https://graphql.contentful.com/content/v1/spaces/${spaceID}/`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${contentfulToken}`,
  },
});

//get all products
const productsQuery = gql`
  {
    productsCollection {
      items {
        sys {
          id
          firstPublishedAt
          publishedAt
        }
        name
        price
        description
        imageCollection {
          items {
            title
            url
            sys {
              id
            }
          }
        }
      }
    }
  }
`;

export const fetcher = async () => {
  const response = await graphQLClient.request(productsQuery);
  return response;
};
