import { Content, MainLayout, Tab, Top } from '../../../../components';
import './Companies.css';
import CompanyList from './Components/CompanyList/CompanyList';

const CompaniesPresenter = ({

}) => {
    return (
        <MainLayout>
            <Top />
            <Tab />
            <CompanyList />
        </MainLayout>
    );
};

export default CompaniesPresenter;