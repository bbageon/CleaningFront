import { useGetCompany } from "hooks/CompanyHooks";
import CompanyDetailPresenter from "./CompanyDetailPresenter"
import { useParams } from "react-router-dom";

const CompanyDetailContainer = () => {

    // 청소업체
    const { id : params } = useParams();

    const { data: companyRes, isLoading: companyLoading, isError: companyError } = useGetCompany(params);
    const company = companyRes?.data || [];

    const testList = [
        {
            service_id: params,
            service_name: '서비스 옵션1',
            service_info: '이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.',
            service_price: 10000,
            review_count: 13,
        },
        {
            service_id: 1,
            service_name: '서비스 옵션1',
            service_info: '이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.',
            service_price: 10000,
            review_count: 13,
        },
        {
            service_id: 1,
            service_name: '서비스 옵션1',
            service_info: '이 청소는 서비스 옵션1로 김재모의 노하우를 제공합니다.',
            service_price: 10000,
            review_count: 13,
        },
    ];

    return (
        <CompanyDetailPresenter

            company={company}

            isLoading={companyLoading}

            data={testList}
            
        />
    );
};

export default CompanyDetailContainer;