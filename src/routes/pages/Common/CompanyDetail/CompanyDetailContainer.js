import CompanyDetailPresenter from "./CompanyDetailPresenter"
import { useGetCompany } from "hooks/CompanyHooks";
import { useParams } from "react-router-dom";
import { useGetCompanyService } from "hooks/ServiceHooks";
import { useGetCompanyDesignateCompanyCategory } from "hooks/DesignateCompanyCategoryHooks";
import { useGetCompanyReview } from "hooks/ReviewHooks";
import { useGetCompanyOneReviewAnswer } from "hooks/ReviewAnswerHooks";
import useCartStore from "store/useCartStore";
import formatPrice from "utils/priceUtils";

const CompanyDetailContainer = () => {

    // 청소업체
    const { id : company_id } = useParams();

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

    const totalPrice = useCartStore((state) => state.totalPrice);
    
    /* ===== RENDER ===== */
    return (
        <CompanyDetailPresenter

            company={company}
            designateCompanyCategory={designateCompanyCategory}
            
            companyReview={companyReview}
            companyAnswer={companyAnswer}
            
            companyService={companyService}
            
            isLoading={companyLoading || companyServiceLoading || companyReviewLoading || companyAnswerLoading || designateCompanyCategoryLoading}

            totalPrice={totalPrice}
            formatPrice={formatPrice}
        />
    );
};

export default CompanyDetailContainer;