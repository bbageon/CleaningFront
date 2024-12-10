import './DetailAddress.css';
import { BottomButton, MainLayout, Top } from '../../../../components';
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
            <BottomButton
                title={'주소 등록'}
                onClick={() => registerAddress()}
                disabled={addressInfo.meter === 0}
            />
        </MainLayout>
    );
};

export default DetailAddressPresenter;