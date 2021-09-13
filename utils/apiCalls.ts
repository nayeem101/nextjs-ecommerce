import { GraphQLClient, gql } from "graphql-request";

const spaceID = process.env.CONTENTFUL_SPACE_ID;
const contentfulToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const API_URL = `https://graphql.contentful.com/content/v1/spaces/${spaceID}/`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${contentfulToken}`,
  },
});

//fetcher function
const fetcher = async (query: string, variables?: Object) => {
  const response = await graphQLClient.request(query, variables);
  return response;
};

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

export const getAllProducts = () => fetcher(productsQuery);

//get a single product using id
const productQuery = gql`
  query getProd($productId: String!) {
    products(id: $productId) {
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
`;

export const getSingleProduct = (productId: string) =>
  fetcher(productQuery, { productId });

//get latest 10 products paths
export const getProductPaths = async () => {
  const query = gql`
    {
      productsCollection(limit: 10) {
        items {
          sys {
            id
          }
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);
  return response;
};
