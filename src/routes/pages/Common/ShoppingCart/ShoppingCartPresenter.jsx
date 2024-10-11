import "./ShoppingCart.css";
import { MainLayout, Top } from "../../../../components";
import CompanyTitle from "./components/CompanyTitle";
import CompanyContent from "./components/CompanyContent/CompanyContent";
import Coupon from "./components/Coupon";
import TotalPriceCheck from "./components/TotalPriceCheck";
import Button from "../../../../components/Button";

const ShoppingCartPresenter = ({
    
}) => {
    return (
        <MainLayout>
            <Top></Top>
            <CompanyTitle></CompanyTitle>
            <CompanyContent></CompanyContent>
            <Coupon></Coupon>
            <TotalPriceCheck></TotalPriceCheck>
            <Button
                flexDirection={'row'}
                gap={'20'}
                Link={'/'}
            />
        </MainLayout>
    );
};

export default ShoppingCartPresenter;