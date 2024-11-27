import { useGetUserReview } from 'hooks/ReviewHooks';
import ReviewHistoryPresenter from './ReviewHistoryPresenter';
import { useAuthStore, useModalStore } from 'store';
import { useGetUser } from 'hooks/UserHooks';
import { Modal } from 'components';

const ReviewHistoryContainer = () => {

    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);

    const isModalOpen = useModalStore(state => state.isModalOpen);
    const content = useModalStore(state => state.content);
    const openModal = useModalStore(state => state.openModal);

    /* ===== QUERY ===== */
    const { data: userDataRes, isLoading: userDataLoading, isError: userDataError } = useGetUser(userId);
    const userData = userDataRes?.data || [];

    const { data: userReviewsRes, isLoading: userReviewsLoading, isError: userReviewsError } = useGetUserReview(userId);
    const userReviews = userReviewsRes?.data.reviews || [];

    const isLoading = userReviewsLoading || userDataLoading;

    /* ===== RENDER ===== */
    if (isLoading) return null;

    return (
        <>
            <ReviewHistoryPresenter
                userReviews={userReviews}

                userData={userData}
            />
            {
                isModalOpen && (
                    <Modal
                        isOpen={isModalOpen}
                        title={content.title}
                        content={content.message}
                    />
                )
            }
        </>
    );
};

export default ReviewHistoryContainer;