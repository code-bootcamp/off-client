import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
    onClickDeleteBoard: any
    marketUpdateData: any;
    data: Pick<IQuery, "fetchBoard"> | undefined
    isMarketCreateModalOpen: boolean
    setIsMarketCreateModalOpen: any
    onClickOpenMarketCreateModal: any
    onClickToChat: any
    toggle: any
    user: any
}