import './EmployeeImageUpload.css';
import { useState } from 'react';
import { API } from 'api';

const EmployeeImageUpload = ({
}) => {
    const [imageFile, setImageFile] = useState([]);
    const [images, setImages] = useState([]);

    const selectImage = (image) => {


        setImageFile(image)
    }

    const selectImages = (image) => {
        const imageArray = Array.from(image);


        imageArray.map(img => {
            setImageFile(prev => {
                return [...prev, img];
            });
        })
    }

    const uploadImage = async () => {
        if (!imageFile) {
            alert(`파일을 선택해주세요.`);
            return;
        }

        const formData = new FormData();
        formData.append('file', imageFile);

        // 단일 이미지
        try {
            const result = await API.postImageTest(formData);

            console.log(result);

            setImages(prev => {
                return [...prev, result.data]
            });
        } catch (e) {
            console.error(e);
        }
    }

    const uploadImages = async () => {
        if (!imageFile) {
            alert(`파일을 선택해주세요.`);
            return;
        }

        const formData = new FormData();
        imageFile?.map(image => {
            formData.append('files', image);
        });

        for (const [key, value] of formData.entries()) {

        };

        // 다수 이미지
        try {
            const result = await API.postImagesTest(formData);



            result?.data?.map(r => {
                setImages(prev => {
                    return [...prev, r]
                });
            })
        } catch (e) {
            console.error(e);
        }
    }
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

export default EmployeeImageUpload;