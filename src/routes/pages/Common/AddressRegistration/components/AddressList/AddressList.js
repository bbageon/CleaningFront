import './AddressList.css';
import { ReactComponent as Pin } from '../../../../../../assets/icons/pin.svg';
import { ReactComponent as EmptyPin } from '../../../../../../assets/icons/emptyPin.svg';

const AddressList = ({
    isSearch,
    addressList,
}) => {
    return (
        <div className='address-list'>
            {
                addressList?.map(address => (
                    <div className='address'>
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
                                {address.title}
                            </div>
                            <div className='address-detail'>
                                {address.address}
                            </div>
                            <div className='special_note'>
                                {address.special_note}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AddressList;