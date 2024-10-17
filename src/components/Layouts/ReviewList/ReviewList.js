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
                companyReview.reviews.map((review, index) => {
                    const answer = companyAnswer.review_answers.find(answer => answer.review_id === review.review_id);

                    return (
                        <ReviewCard
                            key={index}
                            review={review}
                            answer={answer}
                            companyReview={companyReview}
                        />
                    )
                })
            }
        </Content>
    );
};

export default ReviewList;