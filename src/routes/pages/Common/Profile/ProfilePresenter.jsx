import './Profile.css';
import { MainLayout, Top } from "components";
import ProfileHeader from "./components/ProfileHeader";
import ProfileAddress from './components/ProfileAddress/ProfileAddress';
import ProfilePayment from './components/ProfilePayment/ProfilePayment';
import ProfileReview from './components/ProfileReview/ProfileReview';

const ProfilePresenter = ({
    navigate,

    userData,

    userAddress,

    recentReview,
}) => {

    /* ===== RENDER ===== */
    return (
        <MainLayout
            footer={true}
        >
            <Top
                title={'프로필'}
            />
            <ProfileHeader
                navigate={navigate}

                userData={userData}
            />
            <ProfileAddress
                userAddress={userAddress}
            />
            <ProfileReview
                recentReview={recentReview}
            />
            <ProfilePayment

            />
        </MainLayout>
    )
}

export default ProfilePresenter;