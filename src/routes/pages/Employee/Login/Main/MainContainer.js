import { useNavigate } from "react-router-dom";
import MainPresenter from "./MainPresenter"
import { useGetUserAddress } from "hooks/UserAddressHooks";
import { useAuthStore } from "store";
import { useEffect, useState } from "react";


const MainContainer = () => {

    /* ===== STATE ===== */
    const [userAddress, setUserAddress] = useState(null);

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data: userAddressesRes, isLoading: userAddressesLoading, isError: userAddressesError } = useGetUserAddress(userId);
    const userAddresses = userAddressesRes?.data.user_addresses;

    const isLoading = userAddressesLoading;

    /* ===== EFFECTS ===== */
    useEffect(() => {
        if (!userAddressesLoading && userAddresses) {
            const filteredUserAddress = userAddresses?.filter(address => address.is_favorite === 1);
            setUserAddress(filteredUserAddress)
        }
    }, [userAddresses, userAddressesLoading]);

    /* ===== RENDER ===== */
    return (
        <MainPresenter
            isLoading={isLoading}

            // MainHeader
            navigate={navigate}
            userAddress={userAddress}

        />
    );
};

export default MainContainer;