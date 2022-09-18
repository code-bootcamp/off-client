import { PreviewImg, UploadBox, UploadFileHidden } from "./PreviewUpload.styles";
import { IPreviewUploadUIProps } from "./PreviewUpload.types";

export default function PreviewUploadUI(props: IPreviewUploadUIProps) {
    return (
        <>
            { props.fileUrl ? 
            (<PreviewImg onClick = { props.onClickUpload } src = { `https://storage.googleapis.com/${props.fileUrl}` } />) 
            : 
            (<UploadBox onClick = { props.onClickUpload }>+</UploadBox>) 
            }
            <UploadFileHidden type = "file" ref = { props.fileRef } onChange = { props.onChangeFile } />
        </>
    )
}