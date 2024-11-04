import './AddressList.css';
import { ReactComponent as Pin } from '../../../../../../assets/icons/pin.svg';
import { ReactComponent as EmptyPin } from '../../../../../../assets/icons/emptyPin.svg';
import { useAddressStore } from 'store';
import { useNavigate } from 'react-router-dom';

const AddressList = ({
    isSearch,
    addressList,
}) => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    /* ==== STORE ===== */
    const setAddressStore = useAddressStore((state) => state.setAddress);

    /* ===== FUNCTION ===== */
    const handleSetAddressStore = (address) => {
        setAddressStore(address.address, address.address_detail);
        navigate('/main');
    };


    return (
        <div className='address-list'>
            {
                addressList?.map(address => {
                    return (
                        <div
                            className='address'
                            onClick={() => handleSetAddressStore(address)}
                        >
                            {
                                isSearch ?
                                    <div className='search-space'>

                                    </div> :
                                    <div className='pin-icon'>
                                        {address.isCurrent ? <Pin /> : <EmptyPin />}
                                    </div>
                            }
                            <div className='address-info'>
                                {
                                    address.isCurrent && !isSearch &&
                                    <span className='set-current'>
                                        현재 설정된 주소
                                    </span>
                                }
                                <div className='title'>
                                    {address?.address_name}
                                </div>
                                <div className='address-detail'>
                                    {address?.address}
                                </div>
                                <div className='special_note'>
                                    {address?.address_detail}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AddressList;