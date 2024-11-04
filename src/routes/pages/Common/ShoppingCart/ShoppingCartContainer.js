import ShoppingCartPresenter from "./ShoppingCartPresenter";
import { useEffect, useState } from "react";
import { useAddressStore, useAuthStore, useCartStore } from "store";
import { useDeleteCartList, useGetUserCartServiceList } from "hooks/CartListHooks";
import { useGetOneService } from "hooks/ServiceHooks";
import { useNavigate } from "react-router-dom";
import { useCreateRequestClean } from "hooks/RequestCleanHooks";
import { useCreateRequestCleanServiceList } from "hooks/RequestCleanServiceListHooks";
import { API } from "api";
import dayjs from "dayjs";

const ShoppingCartContainer = () => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();



    /* ===== STATE ===== */
    const [serviceId, setServiceId] = useState(null);
    const [company, setCompany] = useState(null);
    const [cartList, setCartList] = useState([]);

    const [selectedDays, setSelectedDays] = useState([]);
    const [isDaySelectorOpen, setIsDaySelectorOpen] = useState(false);



    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);
    const clearCartStore = useCartStore(state => state.clearCartStore);
    const { address, address_detail } = useAddressStore(state => state);



    /* ===== QUERY ===== */
    // 고객 장바구니 목록
    const { data: userCartServiceListRes, isLoading: userCartServiceListLoading, isError: userCartServiceListError } = useGetUserCartServiceList(userId);
    const userCartServiceList = userCartServiceListRes?.data || [];

    // 서비스 단일 조회
    const { data: serviceRes, isLoading: serviceLoading, isError: serviceError } = useGetOneService(serviceId);
    const service = serviceRes?.data || [];

    const isLoading = userCartServiceListLoading || serviceLoading;

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
        requestClean({
            user_id: userId,
            company_id: company.company_id,
            request_status: 'WAITING',
            created_at: dayjs().unix(),
            updated_at: dayjs().unix(),
            request_date: dayjs().unix(),
            clean_address: address,
            clean_address_detail: address_detail,
            total_price: totalPrice,
        });
    };



    /* ===== RENDER ===== */
    return (
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

            address={address}
            address_detail={address_detail}
        />
    );
};

export default ShoppingCartContainer;