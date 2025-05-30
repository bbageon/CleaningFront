import './Companies.css';
import { MainLayout, Tab, Top } from '../../../../components';
import CompanyList from './Components/CompanyList/CompanyList';

const CompaniesPresenter = ({
    // 로딩 처리
    isLoading,

    // 청소업체 전체 조회
    companies,

    filteredCompanies,

    // 청소업체 카테고리
    categories,

    // 청소업체 카테고리 지정 전체 조회
    designateCompanyCategory,

    tabKey,
    setTabCategory,
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
                    companies={filteredCompanies}
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
                onChange={setTabCategory}
                activeKey={tabKey}
            />
        </MainLayout>
    );
};

export default CompaniesPresenter;