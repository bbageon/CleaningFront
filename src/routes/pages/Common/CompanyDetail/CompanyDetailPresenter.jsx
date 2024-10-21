import './CompanyDetail.css';
import { BottomButton, MainLayout } from '../../../../components';
import CompanyDetailTop from './Components/CompanyDetailTop';
import CompanyDetailBottom from './Components/CompanyDetailBottom';
import { useParams } from 'react-router-dom';

const CompanyDetailPresenter = ({
    isLoading,

    company,
    designateCompanyCategory,

    companyReview,
    companyAnswer,

    companyService,

    totalPrice,
    formatPrice,
}) => {

    if (isLoading) {
        return null;
    }
    
    return (
        <MainLayout>

            <CompanyDetailTop
                company={company}
                companyReview={companyReview}
                designateCompanyCategory={designateCompanyCategory}
            />           

            <CompanyDetailBottom
                companyReview={companyReview}
                companyAnswer={companyAnswer}
                companyService={companyService}
            />

            <BottomButton
                title={`${formatPrice(totalPrice)}원 장바구니 보기`}
            />

        </MainLayout>
    );
};

export default CompanyDetailPresenter;