import ProfilePresenter from './ProfilePresenter';
import { useEffect, useState } from 'react';
import { useAuthStore } from 'store';
import { useGetUserAddress } from 'hooks/UserAddressHooks';
import { useGetUserReview } from 'hooks/ReviewHooks';
import { useGetUser } from 'hooks/UserHooks';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = () => {
    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);

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
            const recentReview = [...userReviews].sort((a, b) => b.create_at - a.create_at)[0];
            if (recentReview) {
                setRecentReview(recentReview);
            }
        }
    }, [isLoading, userReviews]);

    if (isLoading) return null;

    /* ===== RENDER ===== */
    return (
        <ProfilePresenter
            navigate={navigate}
            
            userData={userData}

            userAddress={userAddress}

            recentReview={recentReview}
        />
    );
};

export default ProfileContainer;