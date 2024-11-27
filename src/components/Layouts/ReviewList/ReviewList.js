import Content from '../Content';
import ReviewCard from '../ReviewCard';

const ReviewList = ({
    reviews,
    answers,
}) => {

    /* ===== RENDER ===== */
    return (
        <Content
            paddingRight={0}
            paddingLeft={0}
            paddingTop={0}
        >
            {
                reviews.reviews?.length ? (
                    reviews.reviews.map((review, index) => {
                        return (
                            <ReviewCard
                                key={index}
                                review={review}
                                answers={answers}
                                company={reviews}
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