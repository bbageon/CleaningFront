import CompaniesPresenter from "./CompaniesPresenter"
import { useGetCompanies } from "hooks/CompanyHooks";
import { useGetCompanyCategories } from "hooks/CompanyCategoryHooks";
import { useGetDesignateCompanyCategories } from "hooks/DesignateCompanyCategoryHooks";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CompaniesContainer = ({

}) => {

    /* ===== STATE ===== */
    // 아이콘 클릭 시, 해당 카테고리의 청소업체 목록으로 이동
    const location = useLocation();
    const { tabKey } = location.state || { tabKey: 'all' };

    /* ===== QUERY ===== */
    // 선택된 탭
    const [tabCategory, setTabCategory] = useState(tabKey);

    // 탭에 따른 청소업체 필터
    const [filterCompanies, setFilterCompanies] = useState([]);

    // 청소업체 전체 조회
    const { data: companiesRes, isLoading: companiesLoading } = useGetCompanies();
    const companies = companiesRes?.data || [];

    // 청소업체 카테고리 조회
    const { data: companyCategoriesRes, isLoading: companyCategoriesLoading } = useGetCompanyCategories();
    const companyCategories = companyCategoriesRes?.data || [];

    // 청소업체 카테고리 지정 조회
    const { data: designateCompanyCategoriesRes, isLoading: designateCompanyCategoriesLoading } = useGetDesignateCompanyCategories();
    const designateCompanyCategories = designateCompanyCategoriesRes?.data || [];

    /* ===== FUNCTION ===== */
    // 청소업체 필터링 (카테고리)
    const filterCompaniesByCategory = (categoryId) => {
        if (categoryId === 'all') {
            return companies;
        }
        const companyIds = designateCompanyCategories
            .filter(item => item.category_id === categoryId)
            .map(item => item.company_id);

        return companies.filter(company => companyIds.includes(company.company_id));
    }

    // 탭 이벤트 함수
    const handleTabChange = (key) => {
        setTabCategory(key);
    };


    /* ===== HOOKS ===== */
    useEffect(() => {
        const filteredData = filterCompaniesByCategory(tabCategory);
        setFilterCompanies(filteredData);
    }, [tabCategory, companies, designateCompanyCategories]);

    useEffect(() => {
        if (tabKey) {
            setTabCategory(tabKey);
        }
    }, [tabKey]);


    return (
        <CompaniesPresenter
            // 청소업체 전체 조회
            companies={filterCompanies}

            // 청소업체 카테고리
            companyCategories={companyCategories}

            // 청소업체 카테고리 지정
            designateCompanyCategories={designateCompanyCategories}

            // 데이터 로딩
            isLoading={companiesLoading || companyCategoriesLoading || designateCompanyCategoriesLoading}

            // 탭 이벤트 함수
            onTabChange={handleTabChange}

            tabKey={tabCategory}
        />
    );
};

export default CompaniesContainer;