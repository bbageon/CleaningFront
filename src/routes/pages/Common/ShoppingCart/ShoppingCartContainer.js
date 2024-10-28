import { useGetCarts, useGetOneCart, useGetUserCart } from "hooks/CartHooks";
import ShoppingCartPresenter from "./ShoppingCartPresenter";
import { useEffect, useState } from "react";
import { useAuthStore, useCartStore } from "store";
import { useDeleteCartList, useGetUserCartServiceList } from "hooks/CartListHooks";
import { useDeleteService, useGetOneService } from "hooks/ServiceHooks";
import { useNavigate } from "react-router-dom";
import { useGetUserAddress } from "hooks/UserAddressHooks";
import { useCreateRequestClean, useGetUserRequestClean } from "hooks/RequestCleanHooks";
import { useCreateRequestCleanServiceList } from "hooks/RequestCleanServiceListHooks";
import { API } from "api";

const ShoppingCartContainer = () => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    /* ===== STATE ===== */
    const [serviceId, setServiceId] = useState(null);
    const [company, setCompany] = useState(null);
    const [selectedDays, setSelectedDays] = useState([]);
    const [isDaySelectorOpen, setIsDaySelectorOpen] = useState(false);

    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);
    const clearCartStore = useCartStore(state => state.clearCartStore);

    /* ===== QUERY ===== */
    // 고객 주소
    const { data: userAddressesRes, isLoading: userAddressesLoading, isError: userAddressesError } = useGetUserAddress(userId);
    const userAddresses = userAddressesRes?.data || [];

    // 고객 장바구니
    const { data: userCartRes, isLoading: userCartLoading, isError: userCartError } = useGetUserCart(userId);
    const userCart = userCartRes?.data || [];

    // 고객 장바구니 목록
    const { data: userCartServiceListRes, isLoading: userCartServiceListLoading, isError: userCartServiceListError } = useGetUserCartServiceList(userId);
    const userCartServiceList = userCartServiceListRes?.data || [];
    // console.log(userCartServiceList);

    // 고객 청소 요청
    const { data: userRequestCleanRes, isLoading: userRequestCleanLoading, isError: userRequestCleanError } = useGetUserRequestClean(userId);
    const userRequestClean = userRequestCleanRes?.data || [];
    const userRequestCleanList = userRequestClean.request_cleans;

    // 서비스 단일 조회
    const { data: serviceRes, isLoading: serviceLoading, isError: serviceError } = useGetOneService(serviceId);
    const service = serviceRes?.data || [];

    const isLoading = userCartLoading || userCartServiceListLoading || serviceLoading;

    const totalPrice = userCartServiceList.reduce((sum, i) => sum + i.price, 0);

    /* ===== MUTATE ===== */
    const { mutate: deleteCartList } = useDeleteCartList(
        (data) => {

        },
        (error) => {
            console.error(error);
        },
    );

    const { mutate: requestClean } = useCreateRequestClean(
        async (data) => {
            const requestCleanId = data.request.request_clean_id;
    
            const serviceDetails = await Promise.all(
                userCartServiceList.map(service =>
                    API.getOneService(service.service_id).then(response => response.data)
                )
            );
    
            serviceDetails.forEach((serviceDetail) => {
                console.log(serviceDetail)
                requestCleanServiceList({
                    request_clean_id: requestCleanId,
                    service_id: serviceDetail.service_id,
                    company_id: company.company_id,
                    service_name: serviceDetail.service_name,
                    category: serviceDetail.service_category,
                    price_per_meter: serviceDetail.price_per_meter,
                    price_per_time: serviceDetail.price_per_time,
                    service_default_price: serviceDetail.service_default_price,
                });
            });

            // clearCartStore();

        },
        (error) => {
            console.error(error);
        },
    );

    const { mutate: requestCleanServiceList } = useCreateRequestCleanServiceList(
        (data) => {

        },
        (error) => {
            console.error(error);
        },
    );

    /* ===== HOOKS ===== */
    useEffect(() => {
        if (userCartServiceList.length === 0) {
            clearCartStore();
        }
    }, [userCartServiceList]);

    useEffect(() => {
        if (userCartServiceList[0]) {
            setServiceId(userCartServiceList[0]?.service_id);
        }
    }, [userCartServiceList]);

    useEffect(() => {
        if (service?.company) {
            setCompany(service.company);
        }
    }, [service]);

    /* ===== FUNCTION ===== */
    const handleToggleDaySelector = () => {
        setIsDaySelectorOpen(!isDaySelectorOpen);
    };

    const handleNavigateCompany = () => {
        navigate(`/companydetail/${service.company.company_id}`);
    };

    const handleDeleteCartList = async (cartListId) => {
        const result = await API.deleteCartList(cartListId);
        console.log(cartListId)
        console.log(result);
    };

    const handleRequestClean = () => {
        requestClean({
            user_id: userId,
            company_id: company.company_id,
            request_status: 'WAITING',
        });
    };

    /* ===== RENDER ===== */
    return (
        <ShoppingCartPresenter
            isLoading={isLoading}

            userCart={userCart}

            userCartServiceList={userCartServiceList}

            totalPrice={totalPrice}

            company={company}
            handleNavigateCompany={handleNavigateCompany}

            handleToggleDaySelector={handleToggleDaySelector}
            isDaySelectorOpen={isDaySelectorOpen}
            setIsDaySelectorOpen={setIsDaySelectorOpen}

            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}

            handleDeleteCartList={handleDeleteCartList}
            handleRequestClean={handleRequestClean}

            navigate={navigate}

        />
    );
};

export default ShoppingCartContainer;