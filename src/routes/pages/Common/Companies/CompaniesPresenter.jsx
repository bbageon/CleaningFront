import { Content, MainLayout, Tab, Top } from '../../../../components';
import './Companies.css';
import CompanyList from './Components/CompanyList/CompanyList';

const CompaniesPresenter = ({
    // 청소업체 전체 조회
    companies,

    // 청소업체 카테고리
    companyCategories,

    isLoading,

    onTabChange,
    tabKey,
}) => {

    // 데이터 로딩 상태 처리
    if (isLoading) {
        return <></>
    };

    const TabItems = [
        {
            label: '전체',
            key: 'all',
            children:
                <CompanyList
                    companies={companies}
                />,
        },
        ...companyCategories.map(category => ({
            label: category.category_name,
            key: category.category_id,
            children: <CompanyList companies={companies} />
        })),
    ];

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