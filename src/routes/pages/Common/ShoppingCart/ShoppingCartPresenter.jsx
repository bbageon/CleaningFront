import "./ShoppingCart.css";
import { BottomButton, MainLayout, Top } from "../../../../components";
import CompanyTitle from "./components/CompanyTitle";
import CompanyContent from "./components/CompanyContent/CompanyContent";
import Coupon from "./components/Coupon";
import TotalPriceCheck from "./components/TotalPriceCheck";

const ShoppingCartPresenter = ({

}) => {
    return (
        <MainLayout>
            <Top
                notShowIcon={true}
                title={'장바구니'}
            />
            <CompanyTitle

            />
            <CompanyContent
            
            />
            <Coupon

            />
            <TotalPriceCheck

            />
            <BottomButton
                title={'결제하기'}
            />
        </MainLayout>
    );
};

export default ShoppingCartPresenter;