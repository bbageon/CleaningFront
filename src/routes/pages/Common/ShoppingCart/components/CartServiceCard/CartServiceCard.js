import './CartServiceCard.css';
import { useGetOneService } from 'hooks/ServiceHooks';
import { useDeleteCartList } from 'hooks/CartListHooks';

const CartServiceCard = ({
    service,

    filteredUserAddress,
}) => {

    /* ===== QUERY ===== */
    const { data: serviceRes } = useGetOneService(service.service_id);
    const serviceData = serviceRes?.data || [];

    /* ===== MUTATE ===== */
    const { mutate: deleteCartList } = useDeleteCartList(
        (data) => {

        },
        (error) => {

        },
    );

    /* ===== FUNCTION ===== */
    const handleDeleteCartList = (cart_list_id) => {
        deleteCartList({
            cart_list_id: cart_list_id,
            cart_id: service?.cart_id,
        });
    };

    const servicePrice = service.service_unit === 'AREA' ? service.service.price_per_meter || 0 : service.service.price_per_time || 0;

    /* ===== RENDER ===== */
    return (
        <div className='cart-service-card-container'>
            <div className="cart-service-card-line">
                <span className='large'>{serviceData?.service_name}</span>
                <button
                    className='cart-service-card-cancel'
                    onClick={() => handleDeleteCartList(service.cart_list_id)}
                >
                    삭제
                </button>
            </div>
            <div className="cart-service-card-line">
                <span className='light grey'>서비스 기본 가격</span>
                <span>{servicePrice?.toLocaleString()}원</span>
            </div>
            <div className="cart-service-card-line">
                {service.service_unit === 'TIME' ? (
                    <>
                        <span className='light grey'>평당 추가 요금</span>
                        <span>{servicePrice?.toLocaleString()}원 x 1시간(기본)</span>
                    </>
                ) : (
                    <>
                        <span className='light grey'>시간당 추가 요금</span>
                        <span>{servicePrice?.toLocaleString()}원 x {filteredUserAddress[0]?.meter}평</span>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartServiceCard;