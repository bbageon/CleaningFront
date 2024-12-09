import { BottomButton, Content, MainLayout, Top } from 'components';
import './ProfileUpdate.style.css';
import ProfileUpdateInput from './components/ProfileUpdateInput/ProfileUpdateInput';

const ProfileUpdatePresenter = ({
    userName,
    setUserName,

    userData,

    onUpdateClick,
}) => {

    /* ===== RENDER ===== */
    return (
        <MainLayout>
            <Top
                notShowIcon={true}
                title={'프로필 수정'}
            />
            <div className='profile-update-container'>
                <Content
                    gap={25}
                >
                    <div className='user-profile-image'>
                        <img src={userData.profile_image} alt='User Profile Image' />
                    </div>
                    <ProfileUpdateInput
                        label={'이름'}
                        value={userName}
                        setValue={setUserName}
                        maxLength={10}
                        warning={'최대 10글자까지 입력 가능합니다.'}
                    />
                    <ProfileUpdateInput
                        label={'이메일'}
                        value={userData.email}
                        disabled={true}
                    />
                    {/* <ProfileUpdateInput
                        label={'전화번호'}
                        setValue={setUserName}
                        defaultValue={userData.phone}
                    /> */}
                </Content>
            </div>
            <BottomButton
                title={'수정하기'}
                onClick={onUpdateClick}
                disabled={userName?.length === 0 ? true : false}
            />
        </MainLayout>
    );
};

export default ProfileUpdatePresenter;