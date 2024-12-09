import WriteReviewPresenter from "./WriteReviewPresenter"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "components";
import { useCreateReview } from "hooks/ReviewHooks";
import { useCreateReviewImage } from "hooks/ReviewImageHooks";
import { useAuthStore, useModalStore } from "store";
import dayjs from "dayjs";
import { API } from 'api';

const WriteReviewContainer = () => {



    /* ===== VARIABLES ===== */
    const navigate = useNavigate();
    const location = useLocation();
    const requestInfo = { ...location.state.request };



    /* ===== STATE ===== */
    const [reviewContent, setReviewContent] = useState('');
    const [rating, setRating] = useState(0);
    const [uploadedImages, setUploadedImages] = useState([]);

    console.log(uploadedImages);


    /* ===== STORE ===== */
    const { isModalOpen, content, openModal, closeModal } = useModalStore();
    const userId = useAuthStore(state => state.user_id);



    /* ===== MUTATE ===== */
    // 리뷰 작성 mutate
    const { mutate: submitReview } = useCreateReview(
        (data) => {
            
            uploadedImages.forEach( async (image) => {
                submitReviewImages({
                    review_id: data.review_id,
                    image_url: await handleImagesSelection(image?.file),
                    create_at: dayjs().unix(),
                    updated_at: dayjs().unix(),
                });
            });
        },
        (error) => {
            openModal('리뷰 작성 실패', '리뷰 작성 중 오류가 발생했습니다.', null, 'single');
        }
    );

    // 리뷰 이미지 작성 mutate
    const { mutate: submitReviewImages } = useCreateReviewImage(
        (data) => {
            openModal('리뷰 작성 성공', '리뷰가 성공적으로 작성되었습니다.', () => { navigate(-1) }, 'single');
        },
        (error) => {
            openModal('리뷰 이미지 업로드 실패', '이미지 업로드 중 오류가 발생했습니다.', null, 'single');
        }
    );



    /* ===== FUNCTION ===== */
    // 리뷰 내용 저장
    const handleReviewContent = (e) => {
        setReviewContent(e.target.value);
    }

    // 리뷰 작성 에러 처리 및 제출 완료
    const handleSubmit = () => {

        if (rating === 0) {
            openModal('경고', '별점은 최소 1점입니다.', null, 'single');
            return;
        }

        if (reviewContent.trim() === '') {
            openModal('경고', '리뷰 내용을 입력해주세요.', null, 'single');
            return;
        }

        openModal('리뷰 제출', '작성한 리뷰를 제출하시겠습니까?', () => {
            submitReview({
                user_id: userId,
                request_clean_id: requestInfo.request_clean_id,
                company_id: requestInfo.company_id,
                rating: rating,
                review_message: reviewContent,
                created_at: dayjs().unix(),
                updated_at: dayjs().unix(),
            });
        }, 'double');
    };

    // 이미지 업로드
    const handleImagesSelection = async (image) => {
        const formData = new FormData();
        formData.append('file', image);

        try {
            const result = await API.postImageTest(formData);

            console.log(result.data);

            return result.data;

            // result?.data?.map(r => {
            //     setImages(prev => {
            //         return [...prev, r];
            //     });
            // })
        } catch (e) {
            console.error(e);
        }
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