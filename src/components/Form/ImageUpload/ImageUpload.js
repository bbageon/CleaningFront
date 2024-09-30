import { CameraOutlined } from '@ant-design/icons';
import './ImageUpload.css';

const ImageUpload = ({

}) => {
    return (
        <div className='image-upload-container'>
            <div className='image-upload-title'>
                <span className='large bold required'>사진 첨부</span>
                <span className='small gray3'>사진은 최대 5장까지 첨부할 수 있습니다.</span>
            </div>
            <div className='image-upload-wrap'>
                <div className='image-upload-button-wrap'>
                    <button><CameraOutlined style={{ color: 'var(--gray4-color)', fontSize: '2rem' }} /></button>
                    <button><CameraOutlined style={{ color: 'var(--gray4-color)', fontSize: '2rem' }} /></button>
                    <button><CameraOutlined style={{ color: 'var(--gray4-color)', fontSize: '2rem' }} /></button>
                    <button><CameraOutlined style={{ color: 'var(--gray4-color)', fontSize: '2rem' }} /></button>
                    <button><CameraOutlined style={{ color: 'var(--gray4-color)', fontSize: '2rem' }} /></button>
                </div>
                <div className='end'>
                    <span className='large gray1'>0 / 5</span>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;