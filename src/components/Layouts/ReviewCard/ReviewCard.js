import './ReviewCard.css';
import { Rating } from '../../Common';
import Content from '../Content';
import formatDate from 'utils/dateUtils';

import test_logo from './test_logo.png';
import test from './test.jpg';

/**
 * 답변 컴포넌트
 * --
 */
const CompanyReplyCard = ({
    answer,
    companyReview
}) => {

    /* ===== RENDER ===== */
    return (
        <div className='review-card-company'>
            <div className='review-card-company-img'>
                <img src={test_logo} />
            </div>
            <div className='review-card-company-content-wrap'>
                <div className='review-card-company-content'>
                    <span className='large bold'>{companyReview.company.company_name}</span>
                    <span>{answer.answer_message}</span>
                </div>
            </div>
        </div>
    );
};



const ReviewCard = ({
    review,
    answer,
    companyReview,
}) => {


    console.log(review)
    /* ===== RENDER ===== */
    return (
        <div className='review-card-wrap'>
            <Content
                paddingTop={20}
                paddingBottom={20}
                border={true}
                flexDirection={'column'}
                gap={25}
            >
                <div className='review-card-user-wrap'>
                    <div className='review-card-user-profile'>
                        <div className='review-card-user-img'>
                            <img src={test} />
                        </div>
                        <div className='review-card-user-box'>
                            <div className='review-card-user-info'>
                                <div>
                                    <span className='large bold' style={{ paddingRight: '5px' }}>{review.user.name}</span>
                                    {/* <span className='small gray2'>
                                    리뷰 7 평균별점 4.0
                                </span> */}
                                </div>
                                <span className='small gray2'>{formatDate(review.created_at)}</span>
                            </div>
                            <div>
                                <Rating rating={review.rating} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='review-card-user-content'>
                            <p>{review.review_message}</p>
                        </div>
                        <div className='review-card-user-content-img'>
                            <img src={test} />
                        </div>
                    </div>
                </div>
                {
                    answer && (
                        <CompanyReplyCard
                            answer={answer}
                            companyReview={companyReview}
                        />
                    )
                }
            </Content>
        </div>
    );
};

export default ReviewCard;