import './ImageTest.css';

const ImageTestPresenter = ({
    selectImage,
    uploadImage,
    selectImages,
    uploadImages,
    images,
}) => {
    return (
        <div className="image-test-container">
            <h1>single image test</h1>
            <div className="image-test-form">
                <input
                    type="file"
                    onChange={(e) => {
                        selectImage(e.target.files[0])
                    }}
                />
                <button onClick={uploadImage}>이미지 업로드</button>
            </div>
            <br />
            <br />
            <h1>multiple image test</h1>
            <div className='image-test-form'>
                <input
                    type="file"
                    multiple
                    onChange={(e) => {
                        selectImages(e.target.files)
                    }}
                />
                <button onClick={uploadImages}>이미지 업로드</button>
            </div>
            {
                images.length > 0 &&
                images?.map(image => (
                    <img
                        src={image}
                    />
                ))
            }
        </div>
    )
}

export default ImageTestPresenter;