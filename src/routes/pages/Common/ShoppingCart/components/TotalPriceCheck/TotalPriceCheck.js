import { Content } from '../../../../../../components';
import './TotalPriceCheck.css';

const TotalPriceCheck = () => {
    return (
        <Content>
            <div className='total-price-container'>
                <div className='total-price-title'>
                    <text className='sub-title'>결제금액을 확인해주세요</text>
                </div>
                <div className='total-price-content-wrap'>
                    <div className='total-price-content'>
                        <text>부가세</text>
                        <text>3,000원</text>
                    </div>
                    <div className='total-price-content'>
                        <text>부가세</text>
                        <text>3,000원</text>
                    </div>
                </div>
                <div className='total-price-scheduled'>
                    <text className='sub-title'>결제 예정 금액</text>
                    <text className='sub-title'>24,000 원</text>
                </div>
            </div>
        </Content>
    )
}

export default TotalPriceCheck;