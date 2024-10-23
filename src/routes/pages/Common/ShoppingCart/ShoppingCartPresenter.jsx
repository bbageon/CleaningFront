import "./ShoppingCart.css";
import { BottomButton, DaySelector, MainLayout, Top } from "../../../../components";
import CompanyTitle from "./components/CompanyTitle";
import Coupon from "./components/Coupon";
import TotalPriceCheck from "./components/TotalPriceCheck";
import CartServiceList from "./components/CartServiceList/CartServiceList";

const ShoppingCartPresenter = ({
    handleToggleDaySelector,
    isDaySelectorOpen,
    setIsDaySelectorOpen,

    selectedDays,
    setSelectedDays,

}) => {
    return (
        <MainLayout>
            <Top
                notShowIcon={true}
                title={'장바구니'}
                paddingBottom={'20px'}
            />
            <CompanyTitle

            />
            <CartServiceList
                handleToggleDaySelector={handleToggleDaySelector}
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
            />
            <TotalPriceCheck
                    
            />
            <BottomButton
                title={'결제하기'}
            />
            {
                isDaySelectorOpen &&
                    <DaySelector
                        isOpen={isDaySelectorOpen}
                        setIsOpen={setIsDaySelectorOpen}
                        selectedDays={selectedDays}
                        setSelectedDays={setSelectedDays}
                    />
            }
        </MainLayout>
    );
};

export default ShoppingCartPresenter;