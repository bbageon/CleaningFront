import './DetailAddress.css';
import { MainLayout } from '../../../../components';
import DetailAddressTop from './components/DetailAddressTop';
import RegistrationAddress from './components/RegistrationAddress';

const DetailAddressPresenter = ({
    addressInfo,
}) => {
    return (
        <MainLayout>
            <DetailAddressTop />
            <RegistrationAddress
                addressInfo={addressInfo}
            />
        </MainLayout>
    );
};

export default DetailAddressPresenter;