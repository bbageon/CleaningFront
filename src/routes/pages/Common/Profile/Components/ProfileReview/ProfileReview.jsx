import './ProfileReview.style.css';
import { useEffect, useState } from 'react';
import { Content, Rating } from 'components';
import Link from 'components/Link';
import { useGetReviewImageAboutReview } from 'hooks/ReviewImageHooks';

const ProfileReview = ({
    recentReview,
}) => {
    /* ===== STATE ===== */
    const [reviewId, setReviewId] = useState(null);
    const [reviewImage, setReviewImage] = useState(null);

    /* ===== QUERY ===== */
    const { data: reviewImagesRes, isLoading: reviewImagesLoading, isError: reviewImagesError } = useGetReviewImageAboutReview(reviewId);
    const reviewImages = reviewImagesRes?.data || [];

    const isLoading = reviewImagesLoading;

    /* ===== EFFECT ===== */
    useEffect(() => {
        if (recentReview && recentReview.review_id) {
            setReviewId(recentReview.review_id);
        }
    }, [recentReview]);

    useEffect(() => {
        if (!isLoading && reviewImages && Array.isArray(reviewImages.review_images) && reviewImages.review_images.length > 0) {
            setReviewImage(reviewImages.review_images[0].image_url);
        } else {
            setReviewImage(null);
        }
    }, [reviewImages, isLoading]);

    /* ===== RENDER ===== */
    return (
        <Content
            border={true}
        >
            <Link
                title={"리뷰 관리"}
                link={'/reviewhistory'}
                fontSize={'1rem'}
            />
            <div className='profile-review-management'>
                {
                    recentReview ? (
                        <>
                            <div className='review-content-form'>
                                <div className='review-content-info'>
                                    {/* <div className='review-company-img'>
                            {
                                recentReview?.company.logo_image ? (
                                    <img src={recentReview.company.logo_image} alt='업체 로고 이미지' />
                                ) : (
                                    <img src={TestCompanyIcon} />
                                )
                            }
                        </div> */}
                                    <div className='review-company-info'>
                                        <div className='review-company-title'>
                                            <span>{recentReview?.company.company_name}</span>
                                        </div>
                                        <div className='review-company-rating'>
                                            <Rating
                                                width={10}
                                                rating={recentReview?.rating}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='review-content-text'>
                                    {recentReview?.review_message}
                                </div>
                            </div>
                            {reviewImage && (
                                <div className='review-img-form'>
                                    <img src={reviewImage} />
                                </div>
                            )}
                        </>
                    ) : (
                        <span>작성된 리뷰가 없습니다.</span>
                    )
                }
            </div>
        </Content>
    );
};

export default ProfileReview;