import { gql, useQuery } from "@apollo/client"

const FETCH_CATEGORY = gql`
    query fetchCategory {
        fetchCategory {
            id
            name
        }
    }
`
export function getCategoryConfig() {
    const { data } = useQuery(FETCH_CATEGORY)
    return data
}