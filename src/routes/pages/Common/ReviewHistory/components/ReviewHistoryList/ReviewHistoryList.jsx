import ReviewHistoryCard from '../ReviewHistoryCard/ReviewHistoryCard';
import './ReviewHistoryList.style.css';
import { Content } from 'components';

const ReviewHistoryList = ({
    userReviews,

    userData,
}) => {

    /* ===== RENDER ===== */
    return (
        <Content
            paddingRight={0}
            paddingLeft={0}
            paddingTop={0}
        >
            <span
                className='large'
                style={{
                    width: '100%',
                    padding: '2rem 0 1rem 16px',
                    borderBottom: '1px solid var(--divider-color)'
                }}
            >내가 쓴 리뷰 {userReviews?.length}개</span>
            {userReviews?.length ? (
                userReviews.map((review, index) => (
                    <ReviewHistoryCard
                        key={index}
                        review={review}
                        user={userData}
                    />
                ))
            ) : (
                <Content><span className='gray1 medium'>등록된 리뷰가 없습니다.</span></Content>
            )}
        </Content>
    );
};

export default ReviewHistoryList;