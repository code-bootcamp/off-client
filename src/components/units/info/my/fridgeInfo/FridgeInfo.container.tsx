import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchFridgeFoodsArgs } from "../../../../../commons/types/generated/types";
import FridgeInfoUI from "./FridgeInfo.presenter";
import { FETCH_FRIDGE_FOODS } from "./FridgeInfo.queries";

export default function FridgeInfoContainer() {
    const {data} = useQuery<Pick<IQuery,"fetchFridgeFoods">,IQueryFetchFridgeFoodsArgs>(FETCH_FRIDGE_FOODS)
    console.log("123",data)
    return<FridgeInfoUI data = { data }/>
}