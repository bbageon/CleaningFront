import React from "react";
import './Profile.css';
import { Footer, MainLayout, Top } from "components";
import ProfileHeader from "./Components/ProfileHeader";
import ProfileContents from "./Components/ProfileContents";

const ProfilePresenter = () => {
    return (
        <MainLayout>
            <Top/>
            <ProfileHeader/>
            <ProfileContents/>
            <Footer/>
        </MainLayout>
    )
}

export default ProfilePresenter;