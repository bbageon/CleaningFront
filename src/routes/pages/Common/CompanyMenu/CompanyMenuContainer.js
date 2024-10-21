import { useNavigate, useParams } from 'react-router-dom';
import './CompanyMenu.css';
import CompanyMenuPresenter from './CompanyMenuPresenter';
import { useGetOneService } from 'hooks/ServiceHooks';
import { useState } from 'react';
import useCartStore from 'store/useCartStore';
import formatPrice from 'utils/priceUtils';
import useToastStore from 'store/useToastStore';

const CompanyMenuContainer = () => {

    /* ===== VARIABLES ===== */
    const { service_id } = useParams();
    const navigate = useNavigate();

    const addToCartStore = useCartStore((state) => state.addToCartStore);
    const { showToast } = useToastStore();

    
    
    const { data: serviceRes, isLoading: serviceLoading, isError: serviceError } = useGetOneService(service_id);
    const service = serviceRes?.data || [];



    /* ===== STATE ===== */
    const [price, setPrice] = useState(0);

    

    /* ===== FUNCTION ===== */
    if (serviceLoading) {
        return null;
    }

    const handleAddToCart = () => {
        const selectedService = {
            service_id: service.service_id,
            service_name: service.service_name,
            price: price,
            company_id: service.company_id,
        };
        addToCartStore(selectedService);
        showToast('장바구니에 담겼습니다.');
        navigate(-1);
    };

    /* ===== RENDER ===== */
    return (
        <CompanyMenuPresenter
            service={service}

            price={price}
            setPrice={setPrice}

            onAddToCart={handleAddToCart}
            formatPrice={formatPrice}
        />
    );
};

export default CompanyMenuContainer;