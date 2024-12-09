import Link from 'components/Link';
import './ProfileReview.style.css';
import { Content, Rating } from 'components';
import TestCompanyIcon from './TestCompanyIcon.svg';
import TestImg from './TestImg.svg';

const ProfileReview = ({
    recentReview,
}) => {

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
                            <div className='review-img-form'>
                                <img src={TestImg}></img>
                            </div>
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