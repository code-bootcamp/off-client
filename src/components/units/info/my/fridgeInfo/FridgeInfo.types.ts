import { IQuery } from "../../../../../commons/types/generated/types";

export interface IFridgeInfoUIProps {
    data: Pick<IQuery, "fetchFridgeFoods"> | undefined
    onClickToFridge: () => void
    onFetchMore: () => void
}