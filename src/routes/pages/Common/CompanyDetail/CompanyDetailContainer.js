import { useGetCompany } from "hooks/CompanyHooks";
import CompanyDetailPresenter from "./CompanyDetailPresenter"
import { useParams } from "react-router-dom";
import { useGetCompanyService } from "hooks/ServiceHooks";
import { useGetOneDesignateCompanyCategory } from "hooks/DesignateCompanyCategoryHooks";
import { useGetCompanyReview } from "hooks/ReviewHooks";
import { useGetCompanyOneReviewAnswer } from "hooks/ReviewAnswerHooks";

const CompanyDetailContainer = () => {

    // 청소업체
    const { id : companyId } = useParams();

    const { data: companyRes, isLoading: companyLoading, isError: companyError } = useGetCompany(companyId);
    const company = companyRes?.data || [];

    const { data: designateCompanyCategoryRes, isLoading: designateCompanyCategoryLoading, isError: designateCompanyCategoryError } = useGetOneDesignateCompanyCategory(companyId)
    const designateCompanyCategory = designateCompanyCategoryRes?.data || [];

    const { data: companyReviewRes, isLoading: companyReviewLoading, isError: companyReviewError } = useGetCompanyReview(companyId);
    const companyReview = companyReviewRes?.data || [];

    const { data: companyAnswerRes, isLoading: companyAnswerLoading, isError: companyAnswerError } = useGetCompanyOneReviewAnswer(companyId);
    const companyAnswer = companyAnswerRes?.data || [];

    // 서비스
    const { data: companyServiceRes, isLoading: companyServiceLoading, isError: companyServiceError } = useGetCompanyService(companyId);
    const companyService = companyServiceRes?.data || [];
    console.log(companyService.services)


    const testList = [
        {
            service_id: 1,
            service_name: '서비스 옵션1',
            service_content: '이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.',
            price_per_meter: 10000,
            price_per_time: 10000,
        },
        {
            service_id: 1,
            service_name: '서비스 옵션1',
            service_content: '이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.',
            price_per_meter: 10000,
            price_per_time: 10000,            
        },
        {
            service_id: 1,
            service_name: '서비스 옵션1',
            service_content: '이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.',
            price_per_meter: 10000,
            price_per_time: 10000,
        },
    ];

    return (
        <CompanyDetailPresenter

            company={company}
            designateCompanyCategory={designateCompanyCategory}
            
            companyReview={companyReview}
            companyAnswer={companyAnswer}
            
            companyService={companyService}
            
            data = {testList}
            
            isLoading={companyLoading || companyServiceLoading || companyReviewLoading || companyAnswerLoading}
            
        />
    );
};

export default CompanyDetailContainer;