import { useState } from "react";
import WriteReviewPresenter from "./WriteReviewPresenter"
import { Modal } from "components";
import useModalStore from "store/useModalStore";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateReview } from "hooks/ReviewHooks";
import { useCreateReviewImage } from "hooks/ReviewImageHooks";
import useToastStore from "store/useToastStore";

const WriteReviewContainer = () => {

    /* ===== VARIABLES ===== */
    const { isModalOpen, content, openModal, closeModal } = useModalStore();
    const { showToast } = useToastStore();
    
    const navigate = useNavigate();
    const location = useLocation();
    const requestInfo = { ...location.state.request };

    /* ===== STATE ===== */
    const [reviewContent, setReviewContent] = useState('');
    const [rating, setRating] = useState(0);
    const [uploadedImages, setUploadedImages] = useState([]);

    /* ===== FUNCTION ===== */
    // 리뷰 작성 mutate
    const { mutate: submitReview, isLoading: isSubmittingReview } = useCreateReview(
        (data) => {
            uploadedImages.forEach((image) => {
                submitReviewImages({
                    review_id: data.review_id,
                    image_url: image
                })
            });

            showToast('리뷰가 성공적으로 제출되었습니다 !');
            openModal('리뷰 작성 성공', '리뷰가 성공적으로 작성되었습니다.', () => {navigate(-1)}, 'single');
        },
        (error) => {
            openModal('리뷰 작성 실패', '리뷰 작성 중 오류가 발생했습니다.', null, 'single');
        }
    );
    
    // 리뷰 이미지 작성 mutate
    const { mutate: submitReviewImages, isLoading: isSubmittingImages } = useCreateReviewImage(
        (data) => {
            // openModal('리뷰 작성 성공', '리뷰가 성공적으로 작성되었습니다.', () => {navigate(-1)}, 'single');
        },
        (error) => {
            openModal('리뷰 이미지 업로드 실패', '이미지 업로드 중 오류가 발생했습니다.', null, 'single');
        }
    );

    // 리뷰 내용 저장
    const handleReviewContent = (e) => {
        setReviewContent(e.target.value);
    }

    // 리뷰 작성 에러 처리 및 제출 완료
    const handleSubmit = () => {

        if (rating === 0) {
            openModal('경고', '별점은 최소 1점입니다.', null, 'confirm-only');
            return;
        }

        if (reviewContent.trim() === '') {
            openModal('경고', '리뷰 내용을 입력해주세요.', null, 'confirm-only');
            return;
        }

        openModal('리뷰 제출', '작성한 리뷰를 제출하시겠습니까?', () => {
            submitReview({
                user_id: requestInfo.user_id,
                request_clean_id: requestInfo.request_clean_id,
                company_id: requestInfo.company_id,
                rating: rating,
                review_message: reviewContent,
            });
        }, 'double');
    };

    /* ===== RENDER ===== */
    return (
        <>
            <WriteReviewPresenter
                requestInfo={requestInfo}

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
                        title={content.title}
                        content={content.message}
                        onClick={closeModal}
                        onClose={closeModal}
                    />
                )
            }
        </>
    );
};

export default WriteReviewContainer;