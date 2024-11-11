import CompaniesPresenter from "./CompaniesPresenter"
import { useGetCompanies } from "hooks/CompanyHooks";
import { useGetCompanyCategories } from "hooks/CompanyCategoryHooks";
import { useGetCategoryDesignateCompanyCategory, useGetDesignateCompanyCategories } from "hooks/DesignateCompanyCategoryHooks";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CompaniesContainer = ({

}) => {

    /* ===== VARIABLES ===== */
    const location = useLocation();
    const { tabKey } = location.state || { tabKey: 'all' };

    /* ===== STATE ===== */
    // 선택된 탭
    const [tabCategory, setTabCategory] = useState(tabKey);
    const [filteredCompanies, setFilteredCompanies] = useState([]);

    /* ===== QUERY ===== */
    // 청소업체 전체 조회
    const { data: companiesRes, isLoading: companiesLoading, isError: companiesError } = useGetCompanies();
    const companies = companiesRes?.data || [];

    // 청소업체 카테고리 조회
    const { data: categoriesRes, isLoading: categoriesLoading, isError: categoriesError } = useGetCompanyCategories();
    const categories = categoriesRes?.data || [];

    // 청소업체 카테고리 지정 전체 조회
    const { data: designateCompanyCategoryRes, isLoading: designateCompanyCategoryLoading } = useGetDesignateCompanyCategories();
    const designateCompanyCategory = designateCompanyCategoryRes?.data || [];

    const isLoading = companiesLoading || categoriesLoading || designateCompanyCategoryLoading;

    /* ===== FUNCTION ===== */

    /* ===== EFFECTS ===== */
    useEffect(() => {
        if (!isLoading && designateCompanyCategory) {
            if (tabCategory === 'all') {
                setFilteredCompanies(companies);
            } else {
                const filteredCompaniesByCategory = designateCompanyCategory.filter(company => company.company_category.category_id === tabCategory);
                setFilteredCompanies(filteredCompaniesByCategory);
            }
        }

    }, [tabCategory, designateCompanyCategory, isLoading]);

    /* ===== RENDER ===== */
    return (
        <CompaniesPresenter
            // 데이터 로딩
            isLoading={isLoading}

            filteredCompanies={filteredCompanies}

            // 청소업체 전체 조회
            companies={companies}

            // 청소업체 카테고리
            categories={categories}

            // 청소업체 카테고리 지정 전체 조회
            designateCompanyCategory={designateCompanyCategory}

            tabKey={tabCategory}
            setTabCategory={setTabCategory}

        />
    );
};

export default CompaniesContainer;