import { Content, Rating } from 'components';
import './ReviewHistoryCard.style.css';
import formatDate from 'utils/dateUtils';
import test_logo from './test_logo.png';
import test from './test.jpg';
import { useGetReviewOneReviewAnswer } from 'hooks/ReviewAnswerHooks';
import { useDeleteReview } from 'hooks/ReviewHooks';
import { useModalStore } from 'store';
import { useGetReviewImageAboutReview } from 'hooks/ReviewImageHooks';

/**
 * 답변 컴포넌트
 * --
 */
const CompanyReplyCard = ({
    answer,
    company
}) => {

    /* ===== RENDER ===== */
    return (
        <div className='review-card-company'>
            <div className='review-card-company-img'>
                <img src={test_logo} alt='Company Logo' />
            </div>
            <div className='review-card-company-content-wrap'>
                <div className='review-card-company-content'>
                    <span className='large bold'>{company?.company_name}</span>
                    <span>{answer[0]?.answer_message}</span>
                </div>
            </div>
        </div>
    );
};

const ReviewHistoryCard = ({
    review,
    user,
}) => {

    /* ===== STORE ===== */
    const openModal = useModalStore(state => state.openModal);

    /* ===== QUERY ===== */
    const { data: answerRes, isLoading: answerLoading, isError: answerError } = useGetReviewOneReviewAnswer(review?.review_id);
    const answer = answerRes?.data.review_answers || [];

    const { data: reviewImagesRes, isLoading: reviewImagesLoading, isError: reviewImagesError } = useGetReviewImageAboutReview(review?.review_id);
    const reviewImages = reviewImagesRes?.data.review_images || [];

    const isLoading = answerLoading || reviewImagesLoading;


    /* ===== MUTATE ===== */
    const { mutate: deleteReview } = useDeleteReview(
        (data) => {
            openModal('리뷰 삭제', '리뷰 삭제에 성공하였습니다', null, 'single');
        },
    );

    /* ===== FUNCTION ===== */
    const handleDeleteReview = (review_id) => {
        openModal('리뷰 삭제',
            `리뷰를 삭제하시겠습니까?
            삭제된 리뷰는 복구되지 않습니다.`,
            () => {
                deleteReview({ review_id: review_id, user_id: user.user_id })
            }, 'double');
    };

    if (isLoading) return null;

    /* ===== RENDER ===== */
    return (
        <div className='review-card-wrap'>
            <Content
                paddingTop={20}
                paddingBottom={20}
                border={true}
                flexDirection={'column'}
                gap={25}
            >
                <div className='review-card-user-wrap'>
                    <div className='review-card-user-profile'>
                        <div className='review-card-user-img'>
                            <img src={user.profile_image} />
                        </div>
                        <div className='review-card-user-box'>
                            <div className='review-card-user-info'>
                                <span className='large bold' style={{ paddingRight: '5px' }}>{user.name}</span>
                                {/* <span className='small gray2'>
                                    리뷰 7 평균별점 4.0
                                </span> */}
                                <button
                                    className='review-card-delete-button'
                                    onClick={() => handleDeleteReview(review.review_id)}
                                >
                                    삭제
                                </button>
                            </div>
                            <div className='review-card-user-info'>
                                <div>
                                    <Rating rating={review.rating} />
                                </div>
                                <span className='small gray2'>{formatDate(review.created_at)}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='review-card-user-content'>
                            <p>{review.review_message}</p>
                        </div>
                        <div className='review-card-img-wrap'>
                            {reviewImages.map((img, index) => (
                                <div className='review-card-user-content-img'>
                                    <img key={index} src={img.image_url} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {
                    answer[0]?.review_id === review.review_id ? (
                        <CompanyReplyCard
                            answer={answer}
                            company={answer[0]?.company}
                        />
                    ) : (
                        <></>
                    )
                }
            </Content>
        </div>
    );
};

export default ReviewHistoryCard;