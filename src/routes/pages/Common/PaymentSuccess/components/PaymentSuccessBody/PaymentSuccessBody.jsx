import { Button, Content } from 'components';
import './PaymentSuccessBody.style.css';
import formatDate from 'utils/dateUtils';
import formatPrice from 'utils/priceUtils';
import formatPhone from 'utils/phoneUtils';

const PaymentSuccessBody = ({
    navigate,
    location,
}) => {

    let data, company, totalPrice;

    if (location.state) {
        data = location.state?.data;
        company = location.state?.company;
        totalPrice = location.state?.totalPrice;
    } else {
        data = null;
        company = null;
        totalPrice = null;
    }

    return (
        <Content
            paddingLeft={30}
            paddingRight={30}
        >
            {
                data &&
                <>
                    <div className='payment-success-body-container'>
                        <div className='payment-success-body-wrap'>
                            <span>요청날짜</span>
                            <span>{formatDate(data.request.request_date)}</span>
                        </div>
                        {/* <div className='payment-success-body-wrap'>
                    <span>청소 시작일</span>
                    <span>gkdfgmd</span>
                </div> */}
                        {/* <div className='payment-success-body-wrap'>
                    <span>청소 시간</span>
                    <span>gkdfgmd</span>
                </div> */}
                    </div>
                    <div className='payment-success-body-container'>
                        <div className='payment-success-body-wrap'>
                            <span>결제일</span>
                            <span>{formatDate(data.request.request_date)}</span>
                        </div>
                        <div className='payment-success-body-wrap'>
                            <span>결제금액</span>
                            <span>{formatPrice(totalPrice)} 원</span>
                        </div>
                    </div>
                </>
            }

            {
                company &&
                <div className='payment-success-body-container'>
                    <div className='payment-success-body-wrap'>
                        <span>업체명</span>
                        <span>{company.company_name}</span>
                    </div>
                    <div className='payment-success-body-wrap'>
                        <span>업체 연락처</span>
                        <span>{formatPhone(company.company_phone)}</span>
                    </div>
                </div>
            }

            <div className='payment-success-body-btn'>
                <Button
                    title={'확인'}
                    padding={'1rem 0'}
                    onClick={() => navigate('/main')}
                />
            </div>
        </Content>
    );
};

export default PaymentSuccessBody;
