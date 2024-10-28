import './TotalPriceCheck.css';
import { Content } from '../../../../../../components';
import formatPrice from 'utils/priceUtils';

const TotalPriceCheck = ({
    totalPrice
}) => {
    return (
        <div className='total-price-check-wrap'>
            <Content>
                <div className='total-price-check-title'>
                    <span className='bold large'>결제금액을 확인해 주세요.</span>
                </div>
                <div className='total-price-check-container'>
                    <div className='total-price-unit-container'>
                        <div className='total-price-unit-box'>
                            <span>서비스금액</span>
                            <span>{formatPrice(totalPrice)}원</span>
                        </div>
                        {/* <div className='total-price-unit-box'>
                            <span>부과세</span>
                            <span>10,000원</span>
                        </div> */}
                    </div>
                    <div className='total-price-box'>
                        <span className='large bold'>결제예정금액</span>
                        <span className='large bold'>{formatPrice(totalPrice)}원</span>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default TotalPriceCheck;