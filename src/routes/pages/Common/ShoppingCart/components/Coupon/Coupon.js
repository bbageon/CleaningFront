import { Content } from '../../../../../../components';
import './Coupon.css';

const Coupon = () => {
    return (
        <Content>
            <div className='coupon-container'>
                <div className='coupon-title'>
                    <text className='sub-title'>쿠폰</text>
                </div>
                <div className='coupon-content'>
                    <text>부가세</text>
                    <text>3,000원</text>
                </div>
            </div>
        </Content>
    )
}

export default Coupon;