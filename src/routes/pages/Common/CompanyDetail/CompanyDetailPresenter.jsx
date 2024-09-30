import './CompanyDetail.css';
import { BottomButton, MainLayout } from '../../../../components';
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
            <BottomButton
                title={'00,000원 장바구니 보기'}
            />
        </MainLayout>
    );
};

export default CompanyDetailPresenter;