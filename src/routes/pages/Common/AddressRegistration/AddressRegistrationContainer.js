import { useEffect, useRef, useState } from "react";
import AddressRegistrationPresenter from "./AddressRegistrationPresenter"
import { useGetOneUserAddress } from "hooks/UserAddressHooks";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "store";

const AddressRegistrationContainer = () => {

    /* ===== VARIABLES =====*/
    const location = useLocation();

    /* ===== STATE ===== */
    const [isSearch, setIsSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [addressList, setAddressList] = useState([
        // {
        //     isCurrent: true,
        //     title: '청소할 집',
        //     address: '부산광역시 사상구 주례로 47',
        //     special_note: '특이사항 추가',
        // },
        // {
        //     isCurrent: false,
        //     title: '청소할 집',
        //     address: '부산광역시 사상구 주례로 47',
        //     special_note: '특이사항 추가',
        // },
        // {
        //     isCurrent: false,
        //     title: '청소할 집',
        //     address: '부산광역시 사상구 주례로 47',
        //     special_note: '특이사항 추가',
        // },
        // {
        //     isCurrent: false,
        //     title: '청소할 집',
        //     address: '부산광역시 사상구 주례로 47',
        //     special_note: '특이사항 추가',
        // },
        // {
        //     isCurrent: false,
        //     title: '청소할 집',
        //     address: '광주리',
        //     special_note: '특이사항 추가',
        // },
    ]);

    /* ==== STORE ===== */
    const userId = useAuthStore(state => state.user_id);

    /* ===== QUERY ===== */
    const { data: userAddressRes, isLoading: userAddressLoading, isError: userAddressError, refetch } = useGetOneUserAddress(userId);
    const userAddress = userAddressRes?.data || [];

    /* ===== HOOKS ===== */
    useEffect(() => {
        setIsSearch(searchValue.length > 0);
        if (!searchValue.length && !userAddress.user_addresses) {
            const addresses = JSON.stringify(userAddress.user_addresses);
            if (addresses) setAddressList(JSON.parse(addresses));
        }

        const list = [];
        userAddress?.user_addresses?.forEach(address => {
            if (address.address.indexOf(searchValue) == -1 && address?.address_name.indexOf(searchValue) == -1) return;

            list.push(address);
        })
        setAddressList(list);
    }, [searchValue, location, userAddress]);

    /* ===== RENDER ===== */
    return (
        <AddressRegistrationPresenter
            isSearch={isSearch}
            addressList={addressList}

            setSearchValue={setSearchValue}
        />
    );
};

export default AddressRegistrationContainer;