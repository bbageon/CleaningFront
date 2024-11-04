import './AddressRegistration.css';
import { MainLayout } from '../../../../components';
import RegistrationHeader from './components/RegistrationHeader';
import AddressList from './components/AddressList';

const AddressRegistrationPresenter = ({
    isSearch,
    addressList,

    setSearchValue,

    isLoading,
}) => {

    if (isLoading) return null;

    /* ===== RENDER ===== */
    return (
        <MainLayout>
            <RegistrationHeader
                isSearch={isSearch}
                setSearchValue={setSearchValue}
            />
            <AddressList
                isSearch={isSearch}
                addressList={addressList}
            />
        </MainLayout>
    );
};

export default AddressRegistrationPresenter;