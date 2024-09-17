import './CompanyDetail.css';
import { MainLayout } from '../../../../components';
import CompanyDetailTop from './Components/CompanyDetailTop';
import CompanyDetailBottom from './Components/CompanyDetailBottom';

const CompanyDetailPresenter = ({
    data,
}) => {
    return (
        <MainLayout>
            <CompanyDetailTop
            
            />
            <CompanyDetailBottom
                data={data}
            />
        </MainLayout>
    );
};

export default CompanyDetailPresenter;