import './DetailAddress.css';
import { MainLayout, Top } from '../../../../components';
import RegistrationAddress from './components/RegistrationAddress';

const DetailAddressPresenter = ({
    addressInfo,
    setAddressInfo,
    registerAddress,
}) => {
    return (
        <MainLayout>
            <Top
                title={'상세 주소'}
                notShowIcon={true}
            />
            <RegistrationAddress
                addressInfo={addressInfo}
                setAddressInfo={setAddressInfo}

                registerAddress={registerAddress}
            />
        </MainLayout>
    );
};

export default DetailAddressPresenter;