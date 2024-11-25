import { useLocation, useNavigate } from 'react-router-dom';
import PaymentSuccessPresenter from './PaymentSuccessPresenter';

const PaymentSuccessContainer = () => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();
    const location = useLocation();

    

    return (
        <PaymentSuccessPresenter
            navigate={navigate}
            location={location}
        />
    );
};

export default PaymentSuccessContainer;