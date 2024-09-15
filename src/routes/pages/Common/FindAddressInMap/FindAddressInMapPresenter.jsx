import './FindAddressInMap.css';
import { MainLayout } from '../../../../components';
import FindAddressTop from './components/FindAddressTop';
import AddressMap from './components/AddressMap';
import AddressInfo from './components/AddressInfo';

const FindAddressInMapPresenter = ({
    addressInfo,
    selectAddress,
    getAddress,
}) => {
    return (
        <MainLayout>
            <FindAddressTop />
            <AddressMap
                selectAddress={selectAddress}
                getAddress={getAddress}
            />
            <AddressInfo
                addressInfo={addressInfo}
            />
        </MainLayout>
    );
};

export default FindAddressInMapPresenter;