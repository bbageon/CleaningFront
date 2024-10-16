import { useState } from "react";
import WriteReviewPresenter from "./WriteReviewPresenter"
import { Modal } from "components";
import useErrorStore from "store/useErrorStore";

const WriteReviewContainer = () => {

    /* ===== STATE ===== */
    const [reviewContent, setReviewContent] = useState('');
    const [rating, setRating] = useState(0);
    const [uploadedImages, setUploadedImages] = useState([]);

    const { isModalOpen, error, openModal, closeModal } = useErrorStore();

    /* ===== FUNCTION ===== */
    const handleReviewContent = (e) => {
        setReviewContent(e.target.value);
    }

    const handleSubmit = () => {

        if (rating === 0) {
            openModal('경고', '별점은 최소 1점입니다.');
            return;
        }

        if (reviewContent.trim() === '') {
            openModal('경고', '리뷰 내용을 입력해주세요.');
            return;
        }

        openModal('리뷰 제출', '작성한 리뷰를 제출하시겠습니까?');
    };

    return (
        <>
        <WriteReviewPresenter
            reviewContent={reviewContent}
            handleReviewContent={handleReviewContent}

            setRating={setRating}

            uploadedImages={uploadedImages}
            setUploadedImages={setUploadedImages}

            handleSubmit={handleSubmit}
        />
        {
            isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    title={error.title}
                    content={error.message}
                    onClick={closeModal}
                    onClose={closeModal}
                    error={error.title === '경고'}
                />
            )
        }
        </>
    );
};

export default WriteReviewContainer;