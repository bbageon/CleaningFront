import { useEffect, useRef, useState } from "react";
import AddressRegistrationPresenter from "./AddressRegistrationPresenter"

const AddressRegistrationContainer = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [myAddressList, setMyAddressList] = useState([]);
    const [addressList, setAddressList] = useState([
        {
            isCurrent: true,
            title: '청소할 집',
            address: '부산광역시 사상구 주례로 47',
            special_note: '특이사항 추가',
        },
        {
            isCurrent: false,
            title: '청소할 집',
            address: '부산광역시 사상구 주례로 47',
            special_note: '특이사항 추가',
        },
        {
            isCurrent: false,
            title: '청소할 집',
            address: '부산광역시 사상구 주례로 47',
            special_note: '특이사항 추가',
        },
        {
            isCurrent: false,
            title: '청소할 집',
            address: '부산광역시 사상구 주례로 47',
            special_note: '특이사항 추가',
        },
        {
            isCurrent: false,
            title: '청소할 집',
            address: '광주리',
            special_note: '특이사항 추가',
        },
    ]);

    useEffect(() => {
        setMyAddressList(JSON.parse(JSON.stringify(addressList)));
    }, []);

    useEffect(() => {
        setIsSearch(searchValue.length > 0);
        if (!searchValue.length && !myAddressList) {
            setAddressList(JSON.parse.JSON.stringify(myAddressList));
        }

        const list = [];
        myAddressList.forEach(address => {
            if (address.address.indexOf(searchValue) == -1) return;

            list.push(address);
        })
        setAddressList(list);
    }, [searchValue]);

    return (
        <AddressRegistrationPresenter
            isSearch={isSearch}
            addressList={addressList}

            setSearchValue={setSearchValue}
        />
    );
};

export default AddressRegistrationContainer;