import { MainLayout, Top } from 'components';
import './ReviewHistory.style.css';
import ReviewHistoryList from './components/ReviewHistoryList/ReviewHistoryList';

const ReviewHistoryPresenter = ({
    userReviews,

    userData,
}) => {


    /* ===== RENDER ===== */
    return (
        <MainLayout>
            <Top
                title={'리뷰 내역'}
                notShowIcon={true}
            />
            <ReviewHistoryList
                userReviews={userReviews}

                userData={userData}
            />
        </MainLayout>
    );
};

export default ReviewHistoryPresenter;