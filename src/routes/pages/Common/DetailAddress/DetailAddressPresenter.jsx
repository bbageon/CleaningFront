import './DetailAddress.css';
import { MainLayout } from '../../../../components';
import DetailAddressTop from './components/DetailAddressTop';
import RegistrationAddress from './components/RegistrationAddress';

const DetailAddressPresenter = ({
    addressInfo,
    setAddressInfo,
    registerAddress,
}) => {
    return (
        <MainLayout>
            <DetailAddressTop />
            <RegistrationAddress
                addressInfo={addressInfo}
                setAddressInfo={setAddressInfo}

                registerAddress={registerAddress}
            />
        </MainLayout>
    );
};

export default DetailAddressPresenter;