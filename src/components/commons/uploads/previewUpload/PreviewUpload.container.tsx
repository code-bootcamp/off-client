import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { UPLOAD_FILE } from "../../../units/info/my/myInfo/MyInfo.queries";
import PreviewUploadUI from "./PreviewUpload.presenter";
import { IPreviewUploadProps } from "./PreviewUpload.types";


export default function PreviewUpload(props: IPreviewUploadProps) {
    const fileRef = useRef<HTMLInputElement>(null)
    const [uploadFile] = useMutation(UPLOAD_FILE)

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if(!file) return

        try {
            const result = await uploadFile({
                variables: { files: [file] }
            })
            console.log(result)
            props.onChangeFileUrls(result.data.uploadFile[0], props.index)
        } catch(error) {
            Modal.error({ content: "실패하였습니다" })
        }
    }

    const onClickUpload = () => {
        fileRef.current?.click()
    }


    return (
        <PreviewUploadUI
            fileRef = { fileRef }
            fileUrl = { props.fileUrl }
            defaultFileUrl = { props.defaultFileUrl }
            onChangeFile = { onChangeFile }
            onClickUpload = { onClickUpload }
        />
    )
}