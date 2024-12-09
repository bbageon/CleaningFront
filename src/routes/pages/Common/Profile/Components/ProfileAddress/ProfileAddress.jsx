import { Content } from 'components';
import './ProfileAddress.style.css';
import Link from 'components/Link';
import AddressIcon from './AddressIcon.svg';

const ProfileAddress = ({
    userAddress,
}) => {

    /* ===== RENDER ===== */
    return (
        <Content
            border={true}
            paddingTop={0}
        >
            <Link
                title={"주소 관리"}
                link={'/addressregistration'}
                fontSize={'1rem'}
            />
            <div className='profile-address-management'>
                {
                    userAddress ? (
                        <>
                            <div className='profile-address-image'>
                                <img src={AddressIcon} />
                            </div>
                            <div className='profile-address-contents'>
                                <div className='address-standard'>
                                    <span>현재 설정된 주소</span>
                                </div>
                                <div className='address-contents-detail'>
                                    {
                                        userAddress?.name ? (
                                            <span className='address-title'>{userAddress?.name}</span>
                                        ) : (
                                            <span className='address-title'>청소할 집</span>
                                        )
                                    }
                                    <span>{userAddress?.address}</span>
                                    <span className='small gray2'>{userAddress?.address_detail}, {userAddress?.meter}평</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <span>등록된 주소가 없습니다.</span>
                    )
                }
            </div>

        </Content>
    );
};

export default ProfileAddress;