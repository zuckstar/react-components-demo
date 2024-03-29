import React, {ChangeEvent, FC, useRef, useState} from 'react'
import axios from 'axios'
import UploadList from './uploadList'
import Dragger from './dragger'
// import Button, {ButtonType} from '../Button/button'
 
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  name?: string;
  action: string;
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
  headers?: {[key: string]: any};
  data?: {[key: string]: any};
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
}

export const Upload: FC<UploadProps> = (props) => {
    const {
      action,
      defaultFileList,
      beforeUpload,
      onProgress,
      onSuccess,
      onError,
      onChange,
      onRemove,
      name,
      headers,
      data,
      withCredentials,
      accept,
      multiple,
      drag,
      children
    } = props

    const fileInut = useRef<HTMLInputElement>(null)

    const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])

    // 更新文件数组状态方法
    const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
        setFileList(prevList => {
            return prevList.map(file => {
                if(file.uid === updateFile.uid) {
                    return {...file, ...updateObj}
                } else {
                    return file
                }
            })
        })
    }

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

    const handleRemove = (file: UploadFile) => {
        setFileList((prevList) => {
            return prevList.filter(item => item.uid !== file.uid)
        })

        // 调用用户的 onRemove 方法
        if(onRemove) {
            onRemove(file)
        }
    }

    const uploadFiles = (files: FileList) => {
        let postFiles = Array.from(files) 

        postFiles.forEach(file => {
            if(!beforeUpload) {
                post(file)
            } else {
                const result = beforeUpload(file)
                if (result && result instanceof Promise) {
                    result.then(processedFile => {
                        post(processedFile)
                    }) 
                } else if(result !== false) {
                    post(file)
                }
            }
        })
    }

    const post = (file: File) => {
        let _file: UploadFile = {
            uid: Date.now() + 'upload-file',
            status: 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file
        }
         // setFileList([_file, ...fileList])
        setFileList(prevList => {
            return [_file, ...prevList]
        })
        const formData = new FormData()
        formData.append(name || 'file', file)
        if(data) {
            Object.keys(data).forEach(key => {
                formData.append(key, data[key])
            })
        }
        axios.post(action, formData, {
            headers: {
                ...headers,
                'Content-Type': 'multipart/form-data'
            },
            withCredentials,
            onUploadProgress: (e) => {
                let percentage = Math.round((e.loaded * 100) / e.total) || 0;
                if(percentage < 100) {
                    updateFileList(_file, {percent: percentage, status: 'uploading'})
                    if(onProgress) {
                        onProgress(percentage, file)
                    }
                }
            }
        }).then(resp => {
            updateFileList(_file, {status: 'success', response: resp.data})
            if(onSuccess) {
                onSuccess(resp.data, file)
            }
            if(onChange) {
                onChange(file)
            }
        }).catch(err => {
            updateFileList(_file, {status: 'error', error: err})
            if(onError) {
                onError(err, file)
            }
            if(onChange) {
                onChange(file)
            }
                
            
        })
    }

    return (
        <div
            className="zuck-upload-component"
        >
        <div className="zuck-upload-input"
          style={{ display: 'inline-block' }}
          onClick={handleClick}
        >
          {drag ?
            <Dragger onFile={(files) => {uploadFiles(files)}}>
              {children}
            </Dragger> :
            children
          }
        </div>
            <input 
                className="zuck-file-input"
                style={{display: 'none'}}
                onChange={handleFileChange}
                type="file"
                ref={fileInut}
                accept={accept}
                multiple={multiple}
             />
             <UploadList
                fileList={fileList}
                onRemove={handleRemove}
             />
        </div>
    )
}

Upload.defaultProps = {
    name: 'file'
}

export default Upload;