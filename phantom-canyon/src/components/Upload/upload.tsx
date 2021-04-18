import React, {ChangeEvent, FC, useRef} from 'react'
import axios from 'axios'

import Button, {ButtonType} from '../Button/button'

export interface UploadProps {
    action: string;
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
}

export const Upload: FC<UploadProps> = (props) => {
    const {
        action,
        onProgress,
        onSuccess,
        onError
    } = props

    const fileInut = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        if(fileInut.current) {
            fileInut.current.click()
        }
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files) {
            return
        }
        uploadFiles(files)
        if(fileInut.current) {
            fileInut.current.value = ''
        }
    }

    const uploadFiles = (files: FileList) => {
        let postFiles = Array.from(files) 

        postFiles.forEach(file => {
            const formData = new FormData()
            formData.append(file.name, file)
            axios.post(action, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (e) => {
                    let percentage = Math.round((e.loaded * 100) / e.total) || 0;
                    if(percentage < 100) {
                        if(onProgress) {
                            onProgress(percentage, file)
                        }
                    }
                }
            }).then(resp => {
                console.log(resp)
                if(onSuccess) {
                    onSuccess(resp.data, file)
                }
            }).catch(err => {
                if(onError)
                    onError(err, file)
            })
        })
    }

    return (
        <div
            className="zuck-upload-component"
        >
            <Button 
                btnType={ButtonType.Primary}
                onClick={handleClick}
            >Upload File</Button>
            <input 
                className="zuck-file-input"
                style={{display: 'none'}}
                onChange={handleFileChange}
                type="file"
                ref={fileInut}
             />
        </div>
    )
}

export default Upload;