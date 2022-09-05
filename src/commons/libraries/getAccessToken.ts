import { gql,GraphQLClient } from "graphql-request"

const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken{
        restoreAccessToken
    }
`
export async function getAccessToken(){
    try{
        console.log("getAccessToken??")
        const graphQLClient = new GraphQLClient(
            "http://freshfridge.shop:3000/graphql",
            { credentials: "include" }
        )
        console.log("dddd", graphQLClient)
        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN)
        console.log("1")
        const newAccessToken = result.data.restoreAccessToken
        console.log("2")
        return newAccessToken
    }catch(error){
        if(error instanceof Error)
        console.log("에러",error.message)
    }
}