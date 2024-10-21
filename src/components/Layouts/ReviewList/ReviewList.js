import Content from '../Content';
import ReviewCard from '../ReviewCard';

import './ReviewList.css';

const ReviewList = ({
    companyReview,
    companyAnswer,
}) => {

    /* ===== RENDER ===== */
    return (
        <Content
            paddingRight={0}
            paddingLeft={0}
            paddingTop={0}
        >
            {
                companyReview && companyReview.reviews && companyReview.reviews.length > 0 ? (
                    companyReview.reviews.map((review, index) => {
                        const answer = companyAnswer.review_answers.find(answer => answer.review_id === review.review_id);

                        return (
                            <ReviewCard
                                key={index}
                                review={review}
                                answer={answer}
                                companyReview={companyReview}
                            />
                        );
                    })
                ) : (
                    <Content><span className='gray1 medium'>등록된 리뷰가 없습니다.</span></Content>
                )
            }
        </Content>
    );
};

export default ReviewList;