import { useEffect, useRef, useState } from "react";
import DetailAddressPresenter from "./DetailAddressPresenter"
import { useLocation } from "react-router-dom";
import { useCreateUserAddress } from "hooks/UserAddressHooks";

const DetailAddressContainer = () => {
    const location = useLocation();
    const [addressInfo, setAddressInfo] = useState({
        user_id: 1,
        address: '부산광역시 사상구 주례로 47',
        address_detail: '부산광역시 사상구 주례동 88',
        added_detail: '',
        address_name: '',
        entrance_number: '',
        directions: '',
    })

    const { mutate: addToAddress } = useCreateUserAddress(
        
    );

    useEffect(() => {
        const { address, address_detail } = location?.state;
        setAddressInfo(prev => {
            return {
                ...prev,
                address,
                address_detail: `${address.split(' ').slice(0, 2).join(' ')} ${address_detail}`
            }
        });
    }, []);

    const registerAddress = () => {
        addToAddress(addressInfo);
    };

    return (
        <DetailAddressPresenter
            addressInfo={addressInfo}
            setAddressInfo={setAddressInfo}

            registerAddress={registerAddress}
        />
    );
};

export default DetailAddressContainer;