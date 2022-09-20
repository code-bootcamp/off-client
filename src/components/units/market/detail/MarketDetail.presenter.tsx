import { FormCol, FormRow, Slide, Thumb } from "./marketDetail.styles";

export default function MarketDetailUI (props) {
    return(
        <>
            <FormRow>
                <FormCol xs = { 8 } sm = { 8 } md = { 8 } lg = {  8 } xl = { 8 } >
                    <Thumb src={`https://storage.googleapis.com/${props.data?.fetchBoard.user.usersimage.url}`}/>
                </FormCol>
                <FormCol xs = { 8 } sm = { 8 } md = { 8 } lg = {  8 } xl = { 8 } >
                    <div>
                        {props.data?.fetchBoard.user.name}
                    </div>
                </FormCol>
                <FormCol xs = { 8 } sm = { 8 } md = { 8 } lg = {  8 } xl = { 8 } >

                </FormCol>
            </FormRow>
            <FormRow>
                <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 12 } xl = { 12 } >

                </FormCol>
                <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 12 } xl = { 12 } >

                </FormCol>
            </FormRow>
        </>
    )
}