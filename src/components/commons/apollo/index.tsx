import { ApolloClient, ApolloLink, ApolloProvider, fromPromise, InMemoryCache, operationName } from "@apollo/client";
import { onError } from "@apollo/client/link/error"
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, isLoadedState, isLogoutState, userInfoState } from "../../../commons/store";

interface IApolloSettingProps {
    children: ReactNode
}

const APOLLO_CACHE = new InMemoryCache
export default function ApolloSetting(props: IApolloSettingProps) {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
    const [userInfo, setUserInfo] = useRecoilState(userInfoState)
    const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
    const [isLogout, setIsLogout] = useRecoilState(isLogoutState)

    useEffect(() => {
        getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken)
            setIsLoaded(true)
            if(newAccessToken){
                setIsLogout("로그인")
            }
        })
    },[])

    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
        if (graphQLErrors) {
            for (const err of graphQLErrors) {
                if(err.extensions.code === "UNAUTHENTICATED") {
                    return fromPromise(
                        getAccessToken().then((newAccessToken) => {
                            setAccessToken(newAccessToken)
                            operation.setContext({
                                headers: {
                                    ...operation.getContext().headers,
                                    Authorization: `Bearer ${newAccessToken}`
                                    }
                                })
                            }
                        )
                    ).flatMap(() => forward(operation))
                }
            }
        }
    })

    const uploadLink = createUploadLink({
        uri: "https://freshfridge.shop/graphql",
        headers: { Authorization: `Bearer ${accessToken}` },
        credentials: "include",
    })

    const client = new ApolloClient({
        link: ApolloLink.from([errorLink, uploadLink]),
        cache: APOLLO_CACHE,
        connectToDevTools: true,
    })

    return(
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
