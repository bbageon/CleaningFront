import "./ShoppingCart.css";
import { BottomButton, DaySelector, MainLayout, Top } from "../../../../components";
import CompanyTitle from "./components/CompanyTitle";
import Coupon from "./components/Coupon";
import TotalPriceCheck from "./components/TotalPriceCheck";
import CartServiceList from "./components/CartServiceList/CartServiceList";

const ShoppingCartPresenter = ({
    userCartServiceList,

    totalPrice,

    company,
    handleNavigateCompany,

    handleToggleDaySelector,
    isDaySelectorOpen,
    setIsDaySelectorOpen,

    selectedDays,
    setSelectedDays,

    handleDeleteCartList,
    handleRequestClean,

    isLoading,

    navigate,

    setCartList,

    address,
    address_detail

}) => {

    if (isLoading) {
        return null;
    };

    return (
        <MainLayout>
            <Top
                notShowIcon={true}
                title={'장바구니'}
                paddingBottom={'20px'}
            />
            {
                company ? (
                    <CompanyTitle
                        company={company}
                        handleNavigateCompany={handleNavigateCompany}

                        address={address}
                        address_detail={address_detail}
                    />
                ) : (
                    <></>
                )
            }
            <CartServiceList
                company={company}
                navigate={navigate}

                userCartServiceList={userCartServiceList}

                handleNavigateCompany={handleNavigateCompany}

                handleToggleDaySelector={handleToggleDaySelector}
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}

                handleDeleteCartList={handleDeleteCartList}

                setCartList={setCartList}
            />
            <TotalPriceCheck
                totalPrice={totalPrice}
            />
            <BottomButton
                title={'결제하기'}
                onClick={handleRequestClean}
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