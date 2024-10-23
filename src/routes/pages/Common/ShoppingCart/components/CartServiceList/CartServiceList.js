import { Content } from 'components';
import CartServiceCard from '../CartServiceCard/CartServiceCard';
import './CartServiceList.css';

const CartServiceList = ({
    handleToggleDaySelector,
    selectedDays,
    setSelectedDays,
}) => {
    return (
        <Content>
            <div className='cart-service-list-container'>
                <CartServiceCard
                    handleToggleDaySelector={handleToggleDaySelector}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                />
                <CartServiceCard
                    handleToggleDaySelector={handleToggleDaySelector}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                />
                <CartServiceCard
                    handleToggleDaySelector={handleToggleDaySelector}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                />
                <div className='cart-service-list-button'>
                    <button>+ 서비스 추가</button>
                </div>
            </div>
        </Content>
    );
};

export default CartServiceList;