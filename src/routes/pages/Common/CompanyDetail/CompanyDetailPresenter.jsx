import './CompanyDetail.css';
import { BottomButton, MainLayout } from '../../../../components';
import CompanyDetailTop from './Components/CompanyDetailTop';
import CompanyDetailBottom from './Components/CompanyDetailBottom';
import { ReactComponent as ChatIcon } from '../../../../assets/icons/chatIcon.svg';

const CompanyDetailPresenter = ({
    navigate,

    totalPrice,
    formatPrice,

    company,
    designateCompanyCategory,
    companyReview,
    companyAnswer,
    companyService,

    isLoading,
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
                onClick={() => navigate('/shoppingcart')}
                disabled={totalPrice === 0}
            />

            <button
                className='company-detail-chat'
            >
                <ChatIcon />
            </button>


        </MainLayout>
    );
};

export default CompanyDetailPresenter;