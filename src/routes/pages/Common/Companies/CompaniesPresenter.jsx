import { Content, MainLayout, Tab, Top } from '../../../../components';
import './Companies.css';
import CompanyList from './Components/CompanyList/CompanyList';

const CompaniesPresenter = ({

}) => {

    const TabItems = [
        {
            label: '전체',
            key: '1',
            children: <CompanyList />,
        },
        {
            label: '이사/입주 청소',
            key: '2',
            children: <CompanyList />,
        },
        {
            label: '거주/생활 청소',
            key: '3',
            children: <CompanyList />,
        },
        {
            label: '가전/가구 청소',
            key: '4',
            children: <CompanyList />,
        },
        {
            label: '건물 관리',
            key: '5',
            children: <CompanyList />,
        },
        {
            label: '사업장 청소',
            key: '6',
            children: <CompanyList />,
        },
    ];

    return (
        <MainLayout>
            <Top />
            <Tab
                items={TabItems}
            />
        </MainLayout>
    );
};

export default CompaniesPresenter;