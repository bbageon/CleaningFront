
import { Rating } from '../../Common';
import Content from '../Content';
import './ReviewCard.css';

import test from './test.jpg';

const ReviewCard = ({

}) => {
    return (
        <div className='review-card-wrap'>
            <Content
                paddingTop={20}
                paddingBottom={20}
                border={true}
                flexDirection={'column'}
            >
                <div className='review-card-user-wrap'>
                    <div className='review-card-user-profile'>
                        <div className='review-card-user-img'>
                            <img src={test} />
                        </div>
                        <div className='review-card-user-box'>
                            <div className='review-card-user-info'>
                                <div>
                                    <span className='large bold' style={{ paddingRight: '5px' }}>이모저모</span>
                                    {/* <span className='small gray2'>
                                    리뷰 7 평균별점 4.0
                                </span> */}
                                </div>
                                <span className='small gray2'>2024. 09. 18(수)</span>
                            </div>
                            <div>
                                <Rating rating={4} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='review-card-user-content'>
                            <p>집 청소할 시간이 부족해서 맡겨봤는데 만족했어요!! 추천합니다잇 :) 가나다라마바사아자차타카타파하</p>
                        </div>
                        <div className='review-card-user-content-img'>
                            <img src={test} />
                        </div>
                    </div>
                </div>
                <div className='review-card-company'>
                    <div className='review-card-company-img'>
                        
                    </div>
                    <div className='review-card-company-content'>

                    </div>
                </div>
            </Content>
        </div>
    );
};

export default ReviewCard;