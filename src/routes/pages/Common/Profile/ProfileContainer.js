import ProfilePresenter from './ProfilePresenter';
import { useEffect, useState } from 'react';
import { useAuthStore, useModalStore } from 'store';
import { useGetUserAddress } from 'hooks/UserAddressHooks';
import { useGetUserReview } from 'hooks/ReviewHooks';
import { useGetUser } from 'hooks/UserHooks';
import { useNavigate } from 'react-router-dom';
import { cookie } from 'util';
import { Modal } from 'components';
import dayjs from 'dayjs';

const ProfileContainer = () => {
    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);
    const removeAuth = useAuthStore(state => state.removeAuth);

    const openModal = useModalStore(state => state.openModal);
    const isModalOpen = useModalStore(state => state.isModalOpen);
    const content = useModalStore(state => state.content);

    /* ===== STATE ===== */
    const [userAddress, setUserAddress] = useState(null);
    const [recentReview, setRecentReview] = useState(null);

    /* ===== QUERY ===== */
    const { data: userDataRes, isLoading: userDataLoading, isError: userDataError } = useGetUser(userId);
    const userData = userDataRes?.data || [];

    const { data: userAddressesRes, isLoading: userAddressesLoading, isError: userAddressesError } = useGetUserAddress(userId);
    const userAddresses = userAddressesRes?.data.user_addresses || [];

    const { data: userReviewsRes, isLoading: userReviewsLoading, isError: userReviewsError } = useGetUserReview(userId);
    const userReviews = userReviewsRes?.data.reviews || [];

    const isLoading = userDataLoading || userAddressesLoading || userReviewsLoading;

    /* ===== EFFECT ===== */
    useEffect(() => {
        if (!isLoading && userAddresses) {
            const filteredUserAddress = userAddresses.filter(address => address.is_favorite === 1);
            setUserAddress(...filteredUserAddress);
        }

        if (!isLoading && userReviews) {
            const latestReview = getMostRecentReview(userReviews);
            if (latestReview) {
                setRecentReview(latestReview);
            }
        }
    }, [isLoading, userAddresses, userReviews]);

    /* ===== FUNCTION ===== */
    const handleLogout = () => {

        openModal('로그아웃', '로그아웃 하시겠습니까?', () => {
            cookie.remove('token', { path: '/' });
            cookie.remove('name', { path: '/' });
            cookie.remove('email', { path: '/' });
            cookie.remove('userType', { path: '/' });
            cookie.remove('user_id', { path: '/' });

            removeAuth();

            navigate('/');
        }, 'double');
    };

    const getMostRecentReview = (reviews) => {
        if (!Array.isArray(reviews) || reviews.length === 0) return null;

        const sortedReviews = [...reviews].sort((a, b) => dayjs(b.created_at * 1000).valueOf() - dayjs(a.created_at * 1000).valueOf());
        return sortedReviews[0];
    };

    if (isLoading) return null;

    /* ===== RENDER ===== */
    return (
        <>
            <ProfilePresenter
                navigate={navigate}

                userData={userData}

                userAddress={userAddress}

                recentReview={recentReview}

                onLogoutClick={handleLogout}
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

export default ProfileContainer;