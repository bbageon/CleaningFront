import "./ShoppingCart.css";
import { BottomButton, DaySelector, MainLayout, Top } from "../../../../components";
import CompanyTitle from "./components/CompanyTitle";
import CartServiceList from "./components/CartServiceList/CartServiceList";

const ShoppingCartPresenter = ({
    isLoading,

    navigate,

    userCartServiceList,
    totalPrice,

    company,
    handleNavigateCompany,

    handleDeleteCartList,
    handleRequestClean,

    setCartList,
    filteredUserAddress,

    uploadedImages,
    setUploadedImages,

    isOpen,
    setIsOpen,

    selectedDay,
    setSelectedDay,

}) => {

    if (isLoading) {
        return null;
    };

    /* ===== RENDER ===== */
    return (
        <>
            <Top
                notShowIcon={true}
                title={'장바구니'}
                paddingBottom={'20px'}
            />
            <MainLayout
                padding={30}
            >
                {company ? (
                    <CompanyTitle
                        company={company}
                        handleNavigateCompany={handleNavigateCompany}
                        
                        setIsOpen={setIsOpen}
                    />
                ) : (
                    <></>
                )}
                <CartServiceList
                    company={company}
                    navigate={navigate}

                    userCartServiceList={userCartServiceList}

                    handleNavigateCompany={handleNavigateCompany}

                    handleDeleteCartList={handleDeleteCartList}

                    setCartList={setCartList}

                    totalPrice={totalPrice}
                    filteredUserAddress={filteredUserAddress}

                    uploadedImages={uploadedImages}
                    setUploadedImages={setUploadedImages}
                />
                <BottomButton
                    title={'결제하기'}
                    onClick={handleRequestClean}
                />
                {isOpen && (
                    <DaySelector
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        setIsOpen={setIsOpen}
                    />
                )}
            </MainLayout>
        </>
    );
};

export default ShoppingCartPresenter;