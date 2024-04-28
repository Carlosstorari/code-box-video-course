import { request, gql } from 'graphql-request';

const MASTER_URL = "https://sa-east-1.cdn.hygraph.com/content/clvek617602uj07us1n7xttxa/master";
const getCategory = async () => {
    const query = gql`
    query Categories {
        categories {
          id
          name
          icon {
            url
          }
          slug
        }
      }
    `

    const result = await request(MASTER_URL, query);
    return result;
}

export default {
    getCategory
}