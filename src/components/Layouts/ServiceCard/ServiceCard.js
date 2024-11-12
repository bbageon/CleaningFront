import { useNavigate } from 'react-router-dom';
import Content from '../Content';
import './ServiceCard.css';
import formatPrice from 'utils/priceUtils';

import test from './test.jpg';
import { useCustomContext } from 'context/CustomContext';



const ServiceCard = ({
    service,
    isMenuPage,
}) => {

    const { navigate } = useCustomContext();

    return (
        <div
            className='service-card-wrap'
            onClick={() => navigate(`companydetail/${service.company_id}/service/${service.service_id}`)}
        >
            <Content
                paddingTop={20}
                paddingBottom={20}
                flexDirection={'row'}
                border={isMenuPage ? '10px solid var(--divider-color)' : true}
                gap={'10'}
            >
                <div className='service-card-info-wrap'>
                    <div className='service-card-info-box'>
                        <span className='sub-title'>{service.service_name}</span>
                    </div>
                    <div className='service-card-info-box'>
                        <p className='small' style={{ lineHeight: 'normal' }}>{service.service_content}</p>
                    </div>
                    {
                        isMenuPage ? (
                            <></>
                        ) : (
                            <div className='service-card-price-wrap'>
                                <div className='service-card-info-box'>
                                    <span className='bold'>평당</span>
                                    <span className='bold'>시간당</span>
                                </div>
                                <div className='service-card-info-box'>
                                    <span className>{formatPrice(service.price_per_meter)}원</span>
                                    <span className>{formatPrice(service.price_per_time)}원</span>
                                </div>
                            </div>
                        )
                    }
                    {/* <div>
                        <p className='small gray2'>리뷰: 13개</p>
                    </div> */}
                </div>
                {
                    isMenuPage ? (
                        <></>
                    ) : (
                        <div className='service-card-img-box'>
                            <img src={service.service_image} />
                        </div>
                    )
                }

            </Content>
        </div>
    );
};

export default ServiceCard;