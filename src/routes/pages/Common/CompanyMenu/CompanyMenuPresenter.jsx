import { BottomButton, MainLayout } from '../../../../components';
import './CompanyMenu.css';
import CompanyMenuBottom from './Components/CompanyMenuBottom';
import CompanyMenuTop from './Components/CompanyMenuTop';

const CompanyMenuPresenter = ({

}) => {
    return (
        <MainLayout>
            <CompanyMenuTop
            
            />
            <CompanyMenuBottom
            
            />
            <BottomButton
                title={'00,000원 담기'}
            />
        </MainLayout>
    );
};

export default CompanyMenuPresenter;