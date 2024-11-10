import CompanyMenuPresenter from './CompanyMenuPresenter';
import './CompanyMenu.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneService } from 'hooks/ServiceHooks';
import { useCreateCartList, useGetCompanyCartList } from 'hooks/CartListHooks';
import { useAuthStore, useCartStore, useToastStore } from 'store';
import formatPrice from 'utils/priceUtils';
import { useGetUserCart } from 'hooks/CartHooks';
import { useGetUserAddress } from 'hooks/UserAddressHooks';

const CompanyMenuContainer = () => {



    /* ===== VARIABLES ===== */
    const { service_id } = useParams();
    const navigate = useNavigate();



    /* ===== STATE ===== */
    const [cartId, setCartId] = useState(null);
    const [price, setPrice] = useState(0);
    const [serviceType, setServiceType] = useState(null);



    /* ===== STORE ===== */
    const addToCartStore = useCartStore(state => state.addToCartStore);
    const showToast = useToastStore(state => state.showToast);
    const userId = useAuthStore(state => state.user_id);



    /* ===== QUERY ===== */
    // 고객 장바구니 조회
    const { data: userCartRes, isLoading: userCartLoading, isError: userCartError } = useGetUserCart(userId);
    const userCart = userCartRes?.data || [];


    // 서비스 조회
    const { data: serviceRes, isLoading: serviceLoading, isError: serviceError } = useGetOneService(service_id);
    const service = serviceRes?.data || [];

    // 고객 장바구니 목록 조회
    const { data: userCartListRes, isLoading: userCartListLoading, isError: userCartListError } = useGetCompanyCartList(cartId);
    const userCartServiceList = userCartListRes?.data.cart_lists || [];

    // 고객 주소 조회
    const { data: userAddressRes, isLoading: userAddressLoading, isError: userAddressError } = useGetUserAddress(userId);
    const userAddress = userAddressRes?.data || [];

    const isLoading = serviceLoading || userCartListLoading || userCartLoading;



    /* ===== EFFECT ===== */
    // useEffect(() => {
    //     if (userCartServiceList?.length === 0) {
    //         clearCartStore();
    //     }
    // }, []);

    useEffect(() => {
        if (userCart && userCart.carts?.length) {
            setCartId(userCart.carts[userCart.carts.length - 1].cart_id);
        }
    }, [userCart, cartId]);



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
            cart_id: cartId,
            service_id: service.service_id,
            price: price,
            service_unit: serviceType,
        };

        const existingService = userCartServiceList.find(item => item.service_id === service.service_id);

        if (existingService) {
            showToast('이미 장바구니에 담긴 서비스입니다.');
            return;
        }

        // if (service?.company_id != userCartServiceList[0]?.service.company_id) {
        //     showToast('서로 다른 청소업체의 서비스를 담을 수 없습니다.');
        //     return;
        // }

        const storeSelectedService = {
            cart_id: cartId,
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