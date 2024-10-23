import './CartServiceCard.css';

const CartServiceCard = ({
    handleToggleDaySelector,
    selectedDays,
    setSelectedDays,
}) => {
    return (
        <div className='cart-service-card-container'>
            <button className='cart-service-card-cancel'>✕</button>

            <div className='cart-service-card-info'>
                <span className='large bold '>한우 육회</span>
                <span className='small gray2'>가격 : 평당(20,000원)</span>
                <span className='large'>25,000원</span>
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