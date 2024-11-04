import CompanyDetailPresenter from "./CompanyDetailPresenter"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCompany } from "hooks/CompanyHooks";
import { useGetCompanyService } from "hooks/ServiceHooks";
import { useGetCompanyDesignateCompanyCategory } from "hooks/DesignateCompanyCategoryHooks";
import { useGetCompanyReview } from "hooks/ReviewHooks";
import { useGetCompanyOneReviewAnswer } from "hooks/ReviewAnswerHooks";
import { useGetCompanyCartList } from "hooks/CartListHooks";
import { useAuthStore, useCartStore } from "store";
import { useGetUserCart } from "hooks/CartHooks";
import formatPrice from "utils/priceUtils";

const CompanyDetailContainer = () => {

    /* ===== VARIABLES =====*/
    const { id: company_id } = useParams();
    const navigate = useNavigate();



    /* ===== STATE =====*/
    const [cartId, setCartId] = useState(null);



    /* ===== STORE ===== */
    const totalPrice = useCartStore((state) => state.totalPrice ?? 0);
    const clearCartStore = useCartStore(state => state.clearCartStore);
    const syncCartWithDB = useCartStore(state => state.syncCartWithDB);
    const userId = useAuthStore(state => state.user_id);



    /* ===== QUERY ===== */
    // 청소업체 관련
    const { data: companyRes, isLoading: companyLoading, isError: companyError } = useGetCompany(company_id);
    const company = companyRes?.data || [];

    const { data: designateCompanyCategoryRes, isLoading: designateCompanyCategoryLoading, isError: designateCompanyCategoryError } = useGetCompanyDesignateCompanyCategory(company_id)
    const designateCompanyCategory = designateCompanyCategoryRes?.data || [];

    const { data: companyReviewRes, isLoading: companyReviewLoading, isError: companyReviewError } = useGetCompanyReview(company_id);
    const companyReview = companyReviewRes?.data || [];

    const { data: companyAnswerRes, isLoading: companyAnswerLoading, isError: companyAnswerError } = useGetCompanyOneReviewAnswer(company_id);
    const companyAnswer = companyAnswerRes?.data || [];

    const { data: companyServiceRes, isLoading: companyServiceLoading, isError: companyServiceError } = useGetCompanyService(company_id);
    const companyService = companyServiceRes?.data || [];

    // 장바구니의 장바구니 목록 조회
    const { data: userCartServiceListRes, isLoading: userCartServiceListLoading, isError: userCartServiceListError } = useGetCompanyCartList(cartId);
    const userCartServiceList = userCartServiceListRes?.data.cart_lists || [];

    // 고객 장바구니
    const { data: userCartRes, isLoading: userCartLoading, isError: userCartError } = useGetUserCart(userId);
    const userCart = userCartRes?.data || [];

    const isLoading = companyLoading || designateCompanyCategoryLoading || companyReviewLoading || companyAnswerLoading || companyServiceLoading || userCartServiceListLoading || userCartLoading;



    /* ===== EFFECT ===== */
    useEffect(() => {
        if (userId && userCartServiceList.length > 0) {
            syncCartWithDB(userCartServiceList);
        } else if (userCartServiceList.length === 0) {
            clearCartStore();
        }
    }, [userId, userCartServiceList]);

    useEffect(() => {
        if (userId && userCart.carts?.length) {
            setCartId(userCart.carts[userCart.carts.length - 1].cart_id);
        }
    }, [userId, userCart]);



    /* ===== RENDER ===== */
    return (
        <CompanyDetailPresenter
            navigate={navigate}
            
            totalPrice={totalPrice}
            formatPrice={formatPrice}

            company={company}
            designateCompanyCategory={designateCompanyCategory}
            companyReview={companyReview}
            companyAnswer={companyAnswer}
            companyService={companyService}

            isLoading={isLoading}
        />
    );
};

export default CompanyDetailContainer;