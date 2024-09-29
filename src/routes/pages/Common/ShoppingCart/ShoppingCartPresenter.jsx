import "./ShoppingCart.css";
import { MainLayout, Top } from "../../../../components";
import CompanyTitle from "./components/CompanyTitle";
import CompanyContent from "./components/CompanyContent/CompanyContent";
import Coupon from "./components/Coupon";
import TotalPriceCheck from "./components/TotalPriceCheck";

const ShoppingCartPresenter = () => {
    return (
        <MainLayout>
            <Top></Top>
            <CompanyTitle></CompanyTitle>
            <CompanyContent></CompanyContent>
            <Coupon></Coupon>
            <TotalPriceCheck></TotalPriceCheck>
        </MainLayout>
    );
};

export default ShoppingCartPresenter;