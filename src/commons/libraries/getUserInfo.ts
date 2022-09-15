import { GraphQLClient, gql } from "graphql-request";


export const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            id
            name
            email
            nickname
            phone
        }
    }
`

export async function getUserInfo(token:any) {
  try {
    const graphQLClient = new GraphQLClient(
      "https://freshfridge.shop/graphql",

      {
        credentials: "include",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await graphQLClient.request(FETCH_USER_LOGGED_IN);
    const newUserInfo = await result.fetchUserLoggedIn
    return newUserInfo;
  } catch (error) {

  }
}