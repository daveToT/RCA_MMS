import React, { Component } from 'react';
import { Upload, Icon, Modal, message } from 'antd';
import { reqDeleteImg } from '../../api';
import PropTypes from 'prop-types';
import { BASE_IMG } from '../../config';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class PicturesWall extends Component {
    static propTypes = {
        imgs: PropTypes.array
    }

    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: []
        }
        const imgs = this.props.imgs;
        if (imgs && imgs.length > 0) {
            console.log(imgs[1])
            const fileLists = imgs.map((img, index) => ({
                uid: -index,
                name: "img.name",
                status: 'done',
                url:img
            }))
            this.setState({ fileList: fileLists })
        }
    }

    getImgs = () => this.state.fileList.map(file => file.name);

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = async ({ fileList, file }) => {
        if (file.status === "done") {
            file = fileList[fileList.length - 1];
            const { name, url } = file.response.data;
            file.name = name;
            file.url = url;
        } else if (file.status === 'remove') {
            const result = await reqDeleteImg(file.name)
            if (result.status === 0) {
                message.success('删除图片成功')
            } else {
                message.error('删除图片失败')
            }
        }
        this.setState({ fileList });
    }


    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload
                    action="/admin/img/upload"
                    name='image'
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

export default PicturesWall;