import ServiceHistoryPresenter from "./ServiceHistoryPresenter"
import { useGetCompanyCategories } from "hooks/CompanyCategoryHooks";
import { useGetCompanies } from "hooks/CompanyHooks";
import { useGetRequestCleans } from "hooks/RequestCleanHooks";
import { useGetUsers } from "hooks/UserHooks";
import { useEffect, useMemo } from "react";
import useHistoryStore from "store/useHistoryStore";

const ServiceHistoryContainer = () => {

    /* ===== STATE ===== */

        
    
    /* ===== VARIABLES ===== */
    const { setRequestCleans, requestCleans: storedRequestCleans } = useHistoryStore();

    const { data: requestCleansRes, isLoading: requestCleansLoading, isError: requestCleansError } = useGetRequestCleans();
    const requestCleans = requestCleansRes?.data || [];

    const { data: companiesRes, isLoading: companiesLoading, isError: companiesError } = useGetCompanies();
    const companies = companiesRes?.data || [];

    const { data: usersRes } = useGetUsers();
    const users = usersRes?.data || [];

    const { data: companyCategoriesRes } = useGetCompanyCategories();
    const companyCategories = companyCategoriesRes?.data || [];
    


    /* ===== FUNCTION ===== */
    

    // 데이터 필터링 및 필요한 속성 추가
    const filteredRequestCleans = useMemo(() => {
        return requestCleans.map((request) => {
            const company = companies.find(company => company.company_id === request.company_id);
            const user = users.find(user => user.user_id === request.user_id);

            return {
                ...request,

                // 회원
                user_name: user ? user.name : '존재하지 않는 회원 이름',
                user_phone: user ? user.phone : '존재하지 않는 회원 전화번호',

                // 청소업체
                company_name: company ? company.company_name : '존재하지 않는 데이터',
                company_address: company ? company.company_address : '존재하지 않는 주소',
                company_address_detail: company ? company.company_address_detail : '존재하지 않는 상세 주소',
                company_phone: company ? company.company_phone : '존재하지 않는 전화번호',
                ceo_name: company ? company.ceo_name : '존재하지 않는 대표자명',
            };
        });        
    }, [requestCleans, companies]);

    



    /* ===== HOOKS ===== */

    useEffect(() => {
        if (JSON.stringify(storedRequestCleans) !== JSON.stringify(filteredRequestCleans)) {
            setRequestCleans(filteredRequestCleans);
        }
    }, [filteredRequestCleans, setRequestCleans, storedRequestCleans]);

    

    /* ===== RENDER ===== */
    return (
        <ServiceHistoryPresenter
            requestCleans={filteredRequestCleans}
            isLoading={requestCleansLoading || companiesLoading}
        />
    );
};

export default ServiceHistoryContainer;