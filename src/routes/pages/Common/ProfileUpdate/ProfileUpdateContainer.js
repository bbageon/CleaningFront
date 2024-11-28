import ProfileUpdatePresenter from './ProfileUpdatePresenter';
import { useGetUser, useUpdateUser } from 'hooks/UserHooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'store';

const ProfileUpdateContainer = () => {
    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    /* ===== STATE ===== */
    const [userName, setUserName] = useState('');
    
    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data: userDataRes, isLoading: userDataLoading, isError: userDataError } = useGetUser(userId);
    const userData = userDataRes?.data || [];

    const isLoading = userDataLoading;

    /* ===== MUTATE ===== */
    const { mutate: updateUser } = useUpdateUser(
        (data) => {
            navigate('/profile');
        },
    );

    /* ===== EFFECT ===== */
    useEffect(() => {
        if (!isLoading && userData.name) {
            setUserName(userData.name);
        }
    }, [isLoading, userData])

    /* ===== FUNCTION ===== */
    const handleUserUpdate = () => {
        updateUser({
            user_id: userId,
            body: {
                name: userName,
            },
        });
    };

    /* ===== RENDER ===== */
    if (isLoading) return null;

    return (
        <>
            <ProfileUpdatePresenter
                userName={userName}
                setUserName={setUserName}

                userData={userData}

                onUpdateClick={handleUserUpdate}
            />
        </>
    );
};

export default ProfileUpdateContainer;