import MainPresenter from "./MainPresenter"
import { useNavigate } from "react-router-dom";
import { useGetUserAddress } from "hooks/UserAddressHooks";
import { useAuthStore } from "store";
import { useEffect, useState } from "react";
import { useGetReviewImages } from 'hooks/ReviewImageHooks';
import dayjs from 'dayjs';


const MainContainer = () => {

    /* ===== STATE ===== */
    const [userAddress, setUserAddress] = useState(null);
    const [reviews, setReviews] = useState(null);

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data: userAddressesRes, isLoading: userAddressesLoading, isError: userAddressesError } = useGetUserAddress(userId);
    const userAddresses = userAddressesRes?.data.user_addresses;

    const { data: reviewImagesRes, isLoading: reviewImagesLoading, isError: reviewImagesError } = useGetReviewImages();
    const reviewImages = reviewImagesRes?.data || [];

    const isLoading = userAddressesLoading || reviewImagesLoading;

    /* ===== EFFECTS ===== */
    useEffect(() => {
        if (!userAddressesLoading && userAddresses) {
            const filteredUserAddress = userAddresses?.filter(address => address.is_favorite === 1);
            setUserAddress(filteredUserAddress)
        }
    }, [userAddresses, userAddressesLoading]);

    useEffect(() => {
        if (!reviewImagesLoading && reviewImages) {
            const reviewMap = new Map();
            reviewImages.forEach(review => {
                if (!reviewMap.has(review.review_id)) {
                    reviewMap.set(review.review_id, review);
                }
            });
            const filteredReviews = Array.from(reviewMap.values());

            const sortedReviews = filteredReviews.sort((a, b) => dayjs(b.created_at).valueOf() - dayjs(a.created_at).valueOf());

            setReviews(sortedReviews);
        }
    }, [reviewImages, reviewImagesLoading]);

    /* ===== RENDER ===== */
    return (
        <MainPresenter
            isLoading={isLoading}

            navigate={navigate}
            userAddress={userAddress}

            reviews={reviews}
        />
    );
};

export default MainContainer;