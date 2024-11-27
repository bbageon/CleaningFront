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
    company
}) => {

    /* ===== RENDER ===== */
    return (
        <div className='review-card-company'>
            <div className='review-card-company-img'>
                <img src={test_logo} alt='Company Logo' />
            </div>
            <div className='review-card-company-content-wrap'>
                <div className='review-card-company-content'>
                    <span className='large bold'>{company?.company?.company_name}</span>
                    <span>{answer?.answer_message}</span>
                </div>
            </div>
        </div>
    );
};

const ReviewCard = ({
    review,
    answers,
    company,
}) => {

    /* ===== VARIABLES ===== */
    const matchingAnswer = answers?.review_answers.find(
        (answer) => answer.review_id === review.review_id
    );

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
                            <img src={review.user.profile_image} />
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
                            <img src={test} alt='Review Image'/>
                        </div>
                    </div>
                </div>
                {
                    matchingAnswer && (
                        <CompanyReplyCard
                            answer={matchingAnswer}
                            company={company}
                        />
                    )
                }
            </Content>
        </div>
    );
};

export default ReviewCard;