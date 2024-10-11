import './CompanyDetail.css';
import { BottomButton, MainLayout } from '../../../../components';
import CompanyDetailTop from './Components/CompanyDetailTop';
import CompanyDetailBottom from './Components/CompanyDetailBottom';
import { useParams } from 'react-router-dom';

const CompanyDetailPresenter = ({
    company,
    data,
}) => {
    
    return (
        <MainLayout>
            <CompanyDetailTop
                company={company}
            />
            <CompanyDetailBottom
                data={data}
            />
            <BottomButton
                title={'00,000원 장바구니 보기'}
            />
        </MainLayout>
    );
};

export default CompanyDetailPresenter;