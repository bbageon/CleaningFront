import './AddressList.css';
import { ReactComponent as Pin } from '../../../../../../assets/icons/pin.svg';
import { ReactComponent as EmptyPin } from '../../../../../../assets/icons/emptyPin.svg';
import { useNavigate } from 'react-router-dom';
import { useUpdateUserAddress } from 'hooks/UserAddressHooks';
import dayjs from 'dayjs';
import { useToastStore } from 'store';

const AddressList = ({
    isSearch,
    addressList,
}) => {
    
    /* ===== VARIABLES ===== */
    const navigate = useNavigate();



    /* ===== STORE ===== */
    const showToast = useToastStore(state => state.showToast);



    /* ===== MUTATE ===== */
    const { mutate: defaultAddress } = useUpdateUserAddress(
        (data) => {

        },
        (error) => {

        },
    );



    /* ===== FUNCTION ===== */
    // 주소 즐겨찾기 설정
    const handleSelectAddress = (address) => {
        const { user_address_id, is_favorite, ...updateData } = address;

        if (is_favorite === 1) {
            showToast('이미 지정된 주소입니다.');
            return;
        }

        const updatedAddressList = addressList.map(address => ({
            user_address_id: address.user_address_id,
            body: {
                ...address,
                updated_at: dayjs().unix(),
                is_favorite: address.user_address_id === user_address_id,
            }
        }));

        Promise.all(
            updatedAddressList.map(address =>
                defaultAddress(address)
            )
        ).then(() => {
            showToast('주소가 변경되었습니다.');
            navigate('/main');
        }).catch(error => {
            showToast('주소 변경 중 오류가 발생했습니다.');
            console.error(error);
        });
    };

    

    /* ===== RENDER ===== */
    return (
        <div className='address-list'>
            {
                addressList?.map(address => {
                    return (
                        <div
                            className='address'
                            onClick={() => handleSelectAddress(address)}
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