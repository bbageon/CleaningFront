import './ProfileHeader.css';
import cleanicon1 from '../../../../../../assets/icons/cleanIcon1.svg';
import { Content } from 'components';

const ProfileHeader = ({
    navigate,

    userData,
}) => {

    /* ===== RENDER ===== */
    return (
        <Content>
            <div className='profile-header-container'>
                {
                    userData.length !== 0 ? (
                        <>
                            <div className='profile-header-image'>
                                {
                                    userData?.profile_image ? (
                                        <img src={userData?.profile_image} />
                                    ) : (
                                        <img src={cleanicon1}></img>
                                    )
                                }
                            </div>
                            <span
                                className='user-name large'
                                onClick={() => { navigate('/profileupdate') }}
                            >{userData?.name}</span>
                        </>
                    ) : (
                        <span>로그인 후 이용해 주세요</span>
                    )
                }
            </div>
        </Content>
    )
};

export default ProfileHeader;