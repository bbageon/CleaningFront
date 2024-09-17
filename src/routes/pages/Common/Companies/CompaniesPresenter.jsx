import { Content, MainLayout, Tab, Top } from '../../../../components';
import './Companies.css';
import CompanyList from './Components/CompanyList/CompanyList';

const CompaniesPresenter = ({

}) => {

    const TabItems = [
        {
            label: '전체',
            key: '1',
            children: 'tab_1',
        },
        {
            label: '이사/입주 청소',
            key: '2',
            children: 'tab_1',
        },
        {
            label: '거주/생활 청소',
            key: '3',
            children: 'tab_1',
        },
        {
            label: '가전/가구 청소',
            key: '4',
            children: 'tab_1',
        },
        {
            label: '건물 관리',
            key: '5',
            children: 'tab_1',
        },
        {
            label: '사업장 청소',
            key: '6',
            children: 'tab_1',
        },
    ];

    return (
        <MainLayout>
            <Top />
            <Tab
                items={TabItems}
            />
            <CompanyList />
        </MainLayout>
    );
};

export default CompaniesPresenter;