import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery, IQueryFetchFridgeFoodsArgs } from "../../../../../commons/types/generated/types";
import FridgeInfoUI from "./FridgeInfo.presenter";
import { FETCH_FRIDGE_FOODS } from "./FridgeInfo.queries";

export default function FridgeInfoContainer() {
    const router = useRouter()
    const {data} = useQuery<Pick<IQuery,"fetchFridgeFoods">,IQueryFetchFridgeFoodsArgs>(FETCH_FRIDGE_FOODS)
    const onClickToFridge = () => {
        router.push('/my-fridge')
    }
    return<FridgeInfoUI data = { data } onClickToFridge = { onClickToFridge }/>
}