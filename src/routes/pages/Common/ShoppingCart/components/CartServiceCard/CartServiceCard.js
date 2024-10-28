import { useGetOneService } from 'hooks/ServiceHooks';
import './CartServiceCard.css';
import formatPrice from 'utils/priceUtils';

const CartServiceCard = ({
    service,

    handleToggleDaySelector,
    selectedDays,
    setSelectedDays,

    handleDeleteCartList,
}) => {

    const { data: serviceRes } = useGetOneService(service.service_id);
    const serviceData = serviceRes?.data || [];

    return (
        <div className='cart-service-card-container'>
            <button
                className='cart-service-card-cancel'
                onClick={() => handleDeleteCartList(service.cart_list_id)}
            >✕</button>

            <div className='cart-service-card-info'>
                <span className='large bold '>{serviceData?.service_name}</span>
                <span className='small gray2'>기본가격 : {formatPrice(serviceData?.service_default_price)}</span>
                <span className='large'>{formatPrice(service.price)}원</span>
            </div>

            <div className='cart-service-card-option-container'>
                <button
                    onClick={handleToggleDaySelector}
                >
                    요일 선택</button>
                <button

                >
                    주기 선택
                </button>
            </div>

        </div>
    );
};

export default CartServiceCard;