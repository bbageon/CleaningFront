import './Profile.css';
import { Content, MainLayout, Top } from "components";
import ProfileHeader from "./components/ProfileHeader";
import ProfileAddress from './components/ProfileAddress/ProfileAddress';
import ProfilePayment from './components/ProfilePayment/ProfilePayment';
import ProfileReview from './components/ProfileReview/ProfileReview';

const ProfilePresenter = ({
    navigate,

    userData,

    userAddress,

    recentReview,

    onLogoutClick,
}) => {

    /* ===== RENDER ===== */
    return (
        <MainLayout
            footer={true}
        >
            <Top
                title={'프로필'}
                notShowIcon={true}
            />
            <ProfileHeader
                navigate={navigate}

                userData={userData}
            />
            {
                userData.length !== 0 ? (
                    <>
                        <ProfileAddress
                            userAddress={userAddress}
                        />
                        <ProfileReview
                            recentReview={recentReview}
                        />
                        {/* <ProfilePayment
        
                    /> */}
                        <Content
                            paddingTop={50}
                        >
                            <span
                                style={{
                                    color: 'var(--gray1-color)'
                                }}
                                onClick={onLogoutClick}
                            >로그아웃</span>
                        </Content>
                    </>
                ) : (
                    null
                )
            }
        </MainLayout>
    )
}

export default ProfilePresenter;