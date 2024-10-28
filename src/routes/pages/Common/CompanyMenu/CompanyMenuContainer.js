import CompanyMenuPresenter from './CompanyMenuPresenter';
import './CompanyMenu.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneService } from 'hooks/ServiceHooks';
import { useCreateCartList, useGetUserCartServiceList } from 'hooks/CartListHooks';
import { useAuthStore, useCartStore, useToastStore } from 'store';
import formatPrice from 'utils/priceUtils';

const CompanyMenuContainer = () => {

    /* ===== VARIABLES ===== */
    const { service_id } = useParams();
    const navigate = useNavigate();

    /* ===== STATE ===== */
    const [price, setPrice] = useState(0);
    console.log(price);
    const [serviceType, setServiceType] = useState(null);

    /* ===== STORE ===== */
    const addToCartStore = useCartStore(state => state.addToCartStore);
    const clearCartStore = useCartStore(state => state.clearCartStore);

    const showToast = useToastStore(state => state.showToast);
    const userId = useAuthStore(state => state.user_id);
    const cartItems = useCartStore(state => state.cartItems);

    /* ===== QUERY ===== */
    // 서비스 조회
    const { data: serviceRes, isLoading: serviceLoading, isError: serviceError } = useGetOneService(service_id);
    const service = serviceRes?.data || [];

    // 회원 장바구니 목록 조회
    const { data: userCartListRes, isLoading: userCartListLoading, isError: userCartListError } = useGetUserCartServiceList(userId);
    const userCartServiceList = userCartListRes?.data || [];

    const isLoading = serviceLoading || userCartListLoading;

    /* ===== HOOKS ===== */
    useEffect(() => {
        if (userCartServiceList.length === 0) {
            clearCartStore();
        }
    }, [userCartServiceList]);

    /* ===== MUTATE ===== */
    // 장바구니 담기
    const { mutate: addToCartList } = useCreateCartList(
        (data) => {
            showToast('장바구니에 서비스가 담겼습니다.');
            navigate(-1);
        },
        (error) => {
            showToast('오류가 발생했습니다.');
        },
    );

    /* ===== FUNCTION ===== */
    const handleAddToCart = () => {
        const selectedService = {
            cart_id: 7,
            service_id: service.service_id,
            price: price,
        };

        const existingService = cartItems.find(item => item.service_id === service.service_id);

        if (existingService) {
            showToast('이미 장바구니에 담긴 서비스입니다.');
            return;
        };

        const storeSelectedService = {
            cart_id: 7,
            service_id: service.service_id,
            price: price,
            service_name: service.service_name,
            company_id: service.company_id,
            service_type: serviceType,
        };    

        addToCartStore(storeSelectedService);
        addToCartList(selectedService);
    };

    /* ===== RENDER ===== */
    return (
        <CompanyMenuPresenter
            service={service}

            isLoading={isLoading}

            serviceType={serviceType}
            setServiceType={setServiceType}

            price={price}
            setPrice={setPrice}

            onAddToCart={handleAddToCart}
            formatPrice={formatPrice}
        />
    );
};

export default CompanyMenuContainer;