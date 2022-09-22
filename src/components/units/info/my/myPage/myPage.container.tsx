import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchFridgeFoodsArgs } from "../../../../../commons/types/generated/types";
import MyPageUI from "./MyPage.presenter";
import { FETCH_FRIDGE_FOODS } from "./MyPage.queries";

export default function MyPageContainer() {

    return<MyPageUI/>
}