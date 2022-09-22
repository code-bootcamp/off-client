import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery, IQueryFetchFridgeFoodsArgs } from "../../../../../commons/types/generated/types";
import FridgeInfoUI from "./FridgeInfo.presenter";
import { FETCH_FRIDGE_FOODS } from "./FridgeInfo.queries";

export default function FridgeInfoContainer() {
    const router = useRouter()
    const {data, fetchMore} = useQuery<Pick<IQuery,"fetchFridgeFoods">,IQueryFetchFridgeFoodsArgs>(FETCH_FRIDGE_FOODS,{ fetchPolicy: "network-only" })
    const onFetchMore = () => {
        if (!data) return;
        fetchMore({
            variables: {
                page: Math.ceil(data?.fetchFridgeFoods.length / 10) + 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                console.log("prev",prev,"fetchMore",fetchMoreResult)
                if (fetchMoreResult.fetchFridgeFoods[0]?.id === prev.fetchFridgeFoods[0]?.id)
                    return { fetchFridgeFoods: [...prev.fetchFridgeFoods] };

                return {
                    fetchFridgeFoods: [
                        ...prev.fetchFridgeFoods,
                        ...fetchMoreResult.fetchFridgeFoods,
                    ],
                };
            },
        });
    };
    console.log("data",data)
    const onClickToFridge = () => {
        router.push('/my-fridge')
    }
    return<FridgeInfoUI data = { data } onFetchMore = { onFetchMore } onClickToFridge = { onClickToFridge }/>
}