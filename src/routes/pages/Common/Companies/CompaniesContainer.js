import CompaniesPresenter from "./CompaniesPresenter"
import { useGetCompanies } from "hooks/CompanyHooks";
import { useGetCompanyCategories } from "hooks/CompanyCategoryHooks";
import { useGetCategoryDesignateCompanyCategory, useGetDesignateCompanyCategories } from "hooks/DesignateCompanyCategoryHooks";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

const CompaniesContainer = ({

}) => {

    /* ===== VARIABLES ===== */
    const location = useLocation();
    const { tabKey } = location.state || { tabKey: 'all' };

    /* ===== STATE ===== */
    // 선택된 탭
    const [tabCategory, setTabCategory] = useState(tabKey);

    /* ===== QUERY ===== */
    // 청소업체 전체 조회
    const { data: companiesRes, isLoading: companiesLoading, isError: companiesError } = useGetCompanies();
    const companies = companiesRes?.data || [];

    // 청소업체 카테고리 조회
    const { data: categoriesRes, isLoading: categoriesLoading, isError: categoriesError } = useGetCompanyCategories();
    const categories = categoriesRes?.data || [];

    // 카테고리에 따른 청소업체 조회
    const { data: companiesByCategoryRes, isLoading: companiesByCategoryLoading, isError: companiesByCategoryError } = useGetCategoryDesignateCompanyCategory(tabCategory);
    const companiesByCategory = companiesByCategoryRes?.data || [];

    // 청소업체 카테고리 지정 전체 조회
    const { data: designateCompanyCategoryRes } = useGetDesignateCompanyCategories();
    const designateCompanyCategory = designateCompanyCategoryRes?.data || [];

    /* ===== FUNCTION ===== */
    // 탭 이벤트 함수
    const handleTabChange = useCallback((key) => {
        setTabCategory(key);
    }, []);

    /* ===== RENDER ===== */
    return (
        <CompaniesPresenter

            // 청소업체 전체 조회
            companies={companies}

            // 청소업체 카테고리
            categories={categories}

            // 카테고리에 따른 청소업체 조회
            companiesByCategory={companiesByCategory}

            // 청소업체 카테고리 지정 전체 조회
            designateCompanyCategory={designateCompanyCategory}

            // 데이터 로딩
            isLoading={companiesLoading || companiesByCategoryLoading || categoriesLoading}

            // 탭 이벤트 함수
            onTabChange={handleTabChange}

            tabKey={tabCategory}

        />
    );
};

export default CompaniesContainer;