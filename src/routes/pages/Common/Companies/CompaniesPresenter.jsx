import { memo, useMemo } from 'react';
import { Content, MainLayout, Tab, Top } from '../../../../components';
import './Companies.css';
import CompanyList from './Components/CompanyList/CompanyList';

const CompaniesPresenter = ({
    // 로딩 처리
    isLoading,

    // 청소업체 전체 조회
    companies,

    // 청소업체 카테고리
    categories,

    // 카테고리에 따른 청소업체 조회
    companiesByCategory,

    // 청소업체 카테고리 지정 전체 조회
    designateCompanyCategory,

    // 탭 이벤트
    onTabChange,

    tabKey,
}) => {

    const TabItems = [
        {
            label: '전체',
            key: 'all',
            children:
                <CompanyList
                    companies={companies}
                    designateCompanyCategory={designateCompanyCategory}
                />,
        },
        ...categories.map(category => ({
            key: category.category_id,
            label: category.category_name,
            children:
                <CompanyList
                    companies={companiesByCategory.designateCategories}
                    designateCompanyCategory={designateCompanyCategory}
                />
        })),
    ];

    if (isLoading) {
        return null;
    };

    return (
        <MainLayout>
            <Top />
            <Tab
                items={TabItems}
                onChange={onTabChange}
                activeKey={tabKey}
            />
        </MainLayout>
    );
};

export default CompaniesPresenter;