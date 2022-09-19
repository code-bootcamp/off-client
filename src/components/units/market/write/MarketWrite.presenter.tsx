import { FormCol, FormRow, WriteModal } from "./MarketWrite.styles";
import { MarketWriteUIProps } from "./MarketWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function MarketWriteUI(props: MarketWriteUIProps) {
    return (
        <>
            <WriteModal title = "나눔마켓 등록"
            visible = { props.isMarketCreateModalOpen }
            footer = { null }
            maskClosable = { false } 
            destroyOnClose = { true }
            >
                <form>
                    <FormRow gutter={20}>
                        
                    </FormRow>
                </form>
            </WriteModal>
        </>
    )
}