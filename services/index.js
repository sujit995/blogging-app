import { request, gql } from 'graphql-request';

const graphqlAPI = 'https://api-ap-northeast-1.graphcms.com/v2/ckvn9bbmo1vae01xn8hunfcrx/master';

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              excerpt
              slug
              title
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      
    `
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}

