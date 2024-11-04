import { Content } from 'components';
import CartServiceCard from '../CartServiceCard/CartServiceCard';
import './CartServiceList.css';

const CartServiceList = ({
    company,
    navigate,
    handleNavigateCompany,

    userCartServiceList,

    handleToggleDaySelector,
    selectedDays,
    setSelectedDays,

    handleDeleteCartList,

    setCartList,
}) => {

    return (
        <Content>
            <div className='cart-service-list-container'>
                {
                    userCartServiceList.map((service) => {
                        return (
                            <CartServiceCard
                                key={service.service_id}

                                service={service}

                                handleToggleDaySelector={handleToggleDaySelector}
                                selectedDays={selectedDays}
                                setSelectedDays={setSelectedDays}

                                handleDeleteCartList={handleDeleteCartList}

                                setCartList={setCartList}
                            />
                        )
                    })
                }
                <div className='cart-service-list-button'>
                    <button
                        onClick={company ? handleNavigateCompany : () => navigate('/companies')}
                    >+ 서비스 추가</button>
                </div>
            </div>
        </Content>
    );
};

export default CartServiceList;