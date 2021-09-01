import { message, Modal, Upload } from 'antd';
import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface';

interface IImgUploaderProps {
    curImgUrl?:string
    onChange:(imgUrl:string) => void 
}

interface IImgState {
    showModel:boolean
}

class imgUploader extends Component<IImgUploaderProps,IImgState> {
        state:IImgState = {
            showModel: false,
            
      };
    
        private getUploadContent() {
            if(this.props.curImgUrl) {
                return null
            }else {
                return (
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                )
            }
        }
        private getFileList():UploadFile[] {
            if(this.props.curImgUrl){
                return [
                    {
                        uid:this.props.curImgUrl,
                        name:this.props.curImgUrl,
                        url:this.props.curImgUrl
                    }
                ]
            }
            return []
        }
     handleReaquest = async (p:any)=> {
        console.log(p);
        let formData = new FormData();
        formData.append(p.filename,p.file);
        const requst = new Request(p.action,{
            method:'post',
            body:formData
        });
        const resp = await fetch(requst).then(resp => resp.json());
        if(resp.err) {
            // 有错误
            message.error('上传失败!');
        }else {
            this.props.onChange(resp.data);
        }
    }
    render() {
        return (
            <>
                <Upload
                    action="/api/upload"
                    name="imgfile"
                    multiple={false}
                    accept=".jpg,.png,.gif,.bmp,.jiff"
                    listType="picture-card"
                    fileList={this.getFileList()}
                    customRequest={this.handleReaquest}
                    onRemove={() => {
                        this.props.onChange('')
                    }}
                    onPreview={() => {
                        this.setState({
                            showModel:true
                        })
                    }}
                >
                    {this.getUploadContent()}
                </Upload>
                <Modal
                visible={this.state.showModel}
                footer={null}
                onCancel={() => {
                    this.setState({
                        showModel:false
                    })
                }}
                >
                <img alt="example" style={{ width: '100%' }} src={this.props.curImgUrl} />
                </Modal>
          </>
        );
    }
}

export default imgUploader;