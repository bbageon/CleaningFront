import { MainLayout } from 'components';
import './PaymentSuccess.style.css';
import PaymentSuccessHeader from './components/PaymentSuccessHeader/PaymentSuccessHeader';
import PaymentSuccessBody from './components/PaymentSuccessBody/PaymentSuccessBody';

const PaymentSuccessPresenter = ({
    navigate,
    location,
}) => {
    return (
        <MainLayout>
            <PaymentSuccessHeader
            
            />
            <PaymentSuccessBody
                navigate={navigate}
                location={location}
            />
        </MainLayout>
    )
};

export default PaymentSuccessPresenter;