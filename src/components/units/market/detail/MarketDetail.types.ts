import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
    marketUpdateData: any;
    data: Pick<IQuery, "fetchBoard"> | undefined
    isMarketCreateModalOpen: boolean
    setIsMarketCreateModalOpen: Dispatch<SetStateAction<boolean>>
    onClickOpenMarketCreateModal: (data:any) => void
}