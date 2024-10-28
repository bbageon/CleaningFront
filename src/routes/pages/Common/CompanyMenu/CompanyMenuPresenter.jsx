import './CompanyMenu.css';
import { BottomButton, MainLayout } from '../../../../components';
import CompanyMenuBottom from './Components/CompanyMenuBottom';
import CompanyMenuTop from './Components/CompanyMenuTop';

const CompanyMenuPresenter = ({
    service,
    isLoading,

    serviceType,
    setServiceType,

    price,
    setPrice,

    onAddToCart,
    formatPrice,
}) => {

    if (isLoading) {
        return null;
    }

    return (
        <MainLayout>
            <CompanyMenuTop
                service={service}
            />
            <CompanyMenuBottom
                service={service}
                serviceType={serviceType}
                setServiceType={setServiceType}
                setPrice={setPrice}
            />
            <BottomButton
                onClick={onAddToCart}
                disabled={price === 0}
                title={`장바구니 담기 ${formatPrice(price)} 원`}
            />
        </MainLayout>
    );
};

export default CompanyMenuPresenter;