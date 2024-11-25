import { Content } from 'components';
import './PaymentSuccessHeader.style.css';

const PaymentSuccessHeader = () => {
    return (
        <Content
            paddingTop={75}
        >
            <div className='payment-success-container'>
                <div className='success-icon'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='80'
                        height='80'
                        viewBox='0 0 48 48'
                        fill='none'
                    >
                        <circle cx='24' cy='24' r='24' fill='#E8F5E9' />
                        <path
                            className='check-path'
                            d='M17.5 24.5L23 30L33.5 19'
                            stroke='#4CAF50'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>
                <h1 className='success-message'>요청이 완료되었습니다</h1>
            </div>
        </Content>
    );
};

export default PaymentSuccessHeader;
