import CompanyDetailPresenter from "./CompanyDetailPresenter"
import { useGetCompany } from "hooks/CompanyHooks";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCompanyService } from "hooks/ServiceHooks";
import { useGetCompanyDesignateCompanyCategory } from "hooks/DesignateCompanyCategoryHooks";
import { useGetCompanyReview } from "hooks/ReviewHooks";
import { useGetCompanyOneReviewAnswer } from "hooks/ReviewAnswerHooks";
import { useAuthStore, useCartStore } from "store";
import formatPrice from "utils/priceUtils";
import { useEffect } from "react";
import { useGetUserCartServiceList } from "hooks/CartListHooks";

const CompanyDetailContainer = () => {

    /* =====  VARIABLES =====*/
    const { id: company_id } = useParams();
    const navigate = useNavigate();

    /* ===== STORE ===== */
    const totalPrice = useCartStore((state) => state.totalPrice ?? 0);
    const clearCartStore = useCartStore(state => state.clearCartStore);
    const syncCartWithDB = useCartStore(state => state.syncCartWithDB);
    const userId = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
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

    const { data: userCartServiceListRes, isLoading: userCartServiceListLoading, isError: userCartServiceListError } = useGetUserCartServiceList(userId);
    const userCartServiceList = userCartServiceListRes?.data || [];

    const isLoading = companyLoading || designateCompanyCategoryLoading || companyReviewLoading || companyAnswerLoading || companyServiceLoading || userCartServiceListLoading;

    /* ===== HOOKS ===== */
    useEffect(() => {
        if (userId && userCartServiceList.length > 0) {
            syncCartWithDB(userCartServiceList);
        } else if (userCartServiceList.length === 0) {
            clearCartStore();
        }
    }, [userId, userCartServiceList]);
    
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