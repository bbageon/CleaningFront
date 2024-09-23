import './RegistrationHeader.css';
import FindLocation from '../FindLocation/FindLocation';
import RegistrationTop from '../RegistrationTop';
import SearchInput from '../SearchInput/SearchInput';

const RegistrationHeader = ({
    isSearch,
    setSearchValue,
}) => {
    return (
        <div className="registration-header">
            <RegistrationTop
                isSearch={isSearch}
            />
            <SearchInput
                setSearchValue={setSearchValue}
            />
            <FindLocation />
        </div>
    )
}

export default RegistrationHeader;