import { useState } from "react";
import ImageTestPresenter from "./ImageTest.Presenter";
import { API } from "api";

const ImageTestContainer = () => {
    const [imageFile, setImageFile] = useState([]);
    const [images, setImages] = useState([]);

    const selectImage = (image) => {
        console.log(image)

        setImageFile(image)
    }

    const selectImages = (image) => {
        const imageArray = Array.from(image);
        console.log(imageArray)

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
            console.log(key, value);
        };

        // 다수 이미지
        try {
            const result = await API.postImagesTest(formData);

            console.log(result);
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
        <ImageTestPresenter
            selectImage={selectImage}
            uploadImage={uploadImage}
            selectImages={selectImages}
            uploadImages={uploadImages}

            images={images}
        />
    )
}

export default ImageTestContainer;