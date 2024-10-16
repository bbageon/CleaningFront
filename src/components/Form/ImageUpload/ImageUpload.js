import { CameraOutlined } from '@ant-design/icons';
import './ImageUpload.css';

const ImageUpload = ({
    uploadedImages,
    setUploadedImages,

    maxImages = 5,
}) => {

    /* ===== FUNCTION ===== */
    const handleImageChange = (e, replaceIndex = null) => {
        const files = Array.from(e.target.files);
        const newImages = [];

        // 새 이미지 추가 (중복 검사 포함)
        files.forEach(file => {
            if (!uploadedImages.some(img => img.name === file.name && img.size === file.size)) {
                newImages.push({
                    file: file,
                    preview: URL.createObjectURL(file),
                });
            }
        });

        setUploadedImages((prevImages) => {
            const updatedImages = [...prevImages];

            if (replaceIndex !== null) {
                updatedImages.splice(replaceIndex, 1, newImages[0]);
            } else {
                newImages.forEach(newImage => {
                    const firstEmptyIndex = updatedImages.findIndex(img => img === null || img === undefined);
                    if (firstEmptyIndex !== -1) {
                        updatedImages[firstEmptyIndex] = newImage;
                    } else if (updatedImages.length < maxImages) {
                        updatedImages.push(newImage);
                    }
                });
            }

            return updatedImages.filter(image => image !== null && image !== undefined).slice(0, maxImages);
        })
    };

    return (
        <div className='image-upload-container'>

            <div className='image-upload-title'>
                <span className='large bold required'>사진 첨부</span>
                <span className='small gray3'>사진은 최대 {maxImages}장까지 첨부할 수 있습니다.</span>
            </div>

            <div className='image-upload-wrap'>
                <div className='image-upload-button-wrap'>
                    {
                        Array.from({ length: maxImages }).map((_, index) => (
                            <div key={index} className='image-upload-preview'>
                                {
                                    uploadedImages[index] ? (
                                        <img
                                            src={uploadedImages[index].preview}
                                            alt='preview'
                                            className='image-preview'
                                            onClick={() => document.getElementById(`image-upload-input-${index}`).click()} />
                                    ) : (
                                        <button onClick={() => document.getElementById(`image-upload-input-${index}`).click()}>
                                            <CameraOutlined style={{ color: 'var(--gray4-color)', fontSize: '2rem' }} />
                                        </button>
                                    )
                                }
                                <input
                                    id={`image-upload-input-${index}`}
                                    type='file'
                                    accept='image/*'
                                    multiple
                                    onChange={(e) => handleImageChange(e, index)}
                                    style={{ display: 'none' }}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className='end'>
                    <span className='large gray1'>{uploadedImages.length} / {maxImages}</span>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;