import { useNavigate } from 'react-router-dom';
import Content from '../Content';
import './ServiceCard.css';

import test from './test.jpg';

const ServiceCard = ({
    data,
    menuPage,
}) => {

    // TEST NAVIGATE
    const navigate = useNavigate();

    return (
        <div
            className='service-card-wrap'
            onClick={() => navigate('/companymenu')}
        >
            <Content
                paddingTop={20}
                paddingBottom={20}
                flexDirection={'row'}
                border={menuPage ? '10px solid var(--divider-color)' : true}
                gap={'10'}
            >
                <div className='service-card-info-wrap'>
                    <div className='service-card-info-box'>
                        <span className='sub-title'>서비스 옵션1</span>
                    </div>
                    <div className='service-card-info-box'>
                        <p className='small' style={{ lineHeight: 'normal' }}>이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.</p>
                    </div>
                    {
                        menuPage ? (
                            <></>
                        ) : (
                            <div className='service-card-info-box'>
                                <span className='bold'>평당 10,000원</span>
                            </div>
                        )
                    }
                    <div>
                        <p className='small gray2'>리뷰: 13개</p>
                    </div>
                </div>
                {
                    menuPage ? (
                        <></>
                    ) : (
                        <div className='service-card-img-box'>
                            <img src={test} />
                        </div>
                    )
                }

            </Content>
        </div>
    );
};

export default ServiceCard;