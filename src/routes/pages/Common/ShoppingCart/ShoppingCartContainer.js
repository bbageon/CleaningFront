import ShoppingCartPresenter from "./ShoppingCartPresenter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "api";
import { useDeleteCartList, useGetCompanyCartList } from "hooks/CartListHooks";
import { useGetOneService } from "hooks/ServiceHooks";
import { useCreateRequestClean } from "hooks/RequestCleanHooks";
import { useCreateRequestCleanServiceList } from "hooks/RequestCleanServiceListHooks";
import { useGetUserCart } from "hooks/CartHooks";
import {  useAuthStore, useCartStore, useModalStore } from "store";
import dayjs from "dayjs";
import { Modal } from "components";
import { useGetUserAddress } from "hooks/UserAddressHooks";

const ShoppingCartContainer = () => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();



    /* ===== STATE ===== */
    const [serviceId, setServiceId] = useState(null);
    const [cartId, setCartId] = useState(null);
    const [company, setCompany] = useState(null);
    const [cartList, setCartList] = useState([]);

    const [selectedDays, setSelectedDays] = useState([]);
    const [isDaySelectorOpen, setIsDaySelectorOpen] = useState(false);



    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);
    const clearCartStore = useCartStore(state => state.clearCartStore);
    const { isModalOpen, content, openModal } = useModalStore(state => state);



    /* ===== QUERY ===== */
    // 고객 장바구니
    const { data: userCartRes, isLoading: userCartLoading, isError: userCartError } = useGetUserCart(userId);
    const userCart = userCartRes?.data || [];

    // 고객 장바구니 목록
    const { data: userCartServiceListRes, isLoading: userCartServiceListLoading, isError: userCartServiceListError } = useGetCompanyCartList(cartId);
    const userCartServiceList = userCartServiceListRes?.data.cart_lists || [];

    // 서비스 단일 조회
    const { data: serviceRes, isLoading: serviceLoading, isError: serviceError } = useGetOneService(serviceId);
    const service = serviceRes?.data || [];

    // 고객 주소 조회
    const { data: userAddressesRes, isLoading: userAddressesLoading, isError: userAddressesError } = useGetUserAddress(userId);
    const userAddresses = userAddressesRes?.data.user_addresses || [];
    const filteredUserAddress = userAddresses.filter(address => address.is_favorite === 1);

    const isLoading = userCartServiceListLoading || serviceLoading || userCartLoading || userAddressesLoading;

    const totalPrice = userCartServiceList.reduce((sum, i) => sum + i.price, 0);



    /* ===== MUTATE ===== */
    // 청소 요청
    const { mutate: requestClean } = useCreateRequestClean(
        async (data) => {
            const requestCleanId = data.request.request_clean_id;

            const serviceDetails = await Promise.all(
                userCartServiceList.map(service =>
                    API.getOneService(service.service_id).then(response => response.data)
                )
            );

            serviceDetails.forEach((serviceDetail) => {
                requestCleanServiceList({
                    request_clean_id: requestCleanId,
                    service_id: serviceDetail.service_id,
                    company_id: company.company_id,
                    service_name: serviceDetail.service_name,
                    category: serviceDetail.service_category,
                    price_per_meter: serviceDetail.price_per_meter,
                    price_per_time: serviceDetail.price_per_time,
                    service_default_price: serviceDetail.service_default_price,
                    created_at: dayjs().unix(),
                    updated_at: dayjs().unix(),
                });
            });

            openModal('청소 요청', '청소 요청에 성공하셨습니다.', () => { navigate('/main') }, 'single');
        },
        (error) => {
            console.error(error);
        },
    );

    // 청소 요청 목록
    const { mutate: requestCleanServiceList } = useCreateRequestCleanServiceList(
        (data) => {

        },
        (error) => {
            console.error(error);
        },
    );

    // 장바구니 목록 삭제
    const { mutate: deleteCartList } = useDeleteCartList(
        (data) => {

        },
        (error) => {

        },
    );



    /* ===== EFFECT ===== */
    useEffect(() => {
        if (userCartServiceList.length === 0) {
            clearCartStore();
        } else {
            setCartList(userCartServiceList);
            setServiceId(userCartServiceList[0].service_id);
        }
    }, [cartList, userCartServiceList]);

    useEffect(() => {
        if (service && service.company) {
            setCompany(service.company);
        }
    }, [service]);

    useEffect(() => {
        if (userCart && userCart.carts?.length) {
            setCartId(userCart.carts[userCart.carts.length - 1].cart_id);
        }
    }, [userCart, cartId]);



    /* ===== FUNCTION ===== */
    const handleToggleDaySelector = () => {
        setIsDaySelectorOpen(!isDaySelectorOpen);
    };

    const handleNavigateCompany = () => {
        navigate(`/companydetail/${service.company.company_id}`);
    };

    const handleDeleteCartList = (cartListId) => {
        deleteCartList(cartListId);
    };

    const handleRequestClean = () => {

        if (!userCartServiceList.length) {
            openModal('청소 요청', '장바구니에 서비스가 존재하지 않습니다.', null, 'single');
            return;
        }

        openModal('청소 요청', '청소를 요청하시겠습니까?', () => {
            requestClean({
                user_id: userId,
                company_id: company.company_id,
                request_status: 'WAITING',
                created_at: dayjs().unix(),
                updated_at: dayjs().unix(),
                request_date: dayjs().unix(),
                clean_address: filteredUserAddress[0].address,
                clean_address_detail: filteredUserAddress[0].address_detail,
                total_price: totalPrice,
                quantity: filteredUserAddress[0].meter,
                category: userCartServiceList[0].service.service_category,
                start_clean_date: dayjs().unix(),
            });
        }, 'double');
    };



    /* ===== RENDER ===== */
    return (
        <>
            <ShoppingCartPresenter
                userCartServiceList={userCartServiceList}
                totalPrice={totalPrice}
                company={company}
                selectedDays={selectedDays}

                isLoading={isLoading}
                isDaySelectorOpen={isDaySelectorOpen}

                setIsDaySelectorOpen={setIsDaySelectorOpen}
                setSelectedDays={setSelectedDays}
                setCartList={setCartList}

                handleNavigateCompany={handleNavigateCompany}
                handleDeleteCartList={handleDeleteCartList}
                handleRequestClean={handleRequestClean}
                handleToggleDaySelector={handleToggleDaySelector}
                navigate={navigate}
            />
            {
                isModalOpen && (
                    <Modal
                        isOpen={isModalOpen}
                        title={content.title}
                        content={content.message}
                    />
                )
            }
        </>
    );
};

export default ShoppingCartContainer;