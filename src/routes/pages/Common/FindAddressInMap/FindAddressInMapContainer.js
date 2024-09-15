import { useEffect, useRef, useState } from "react";
import FindAddressInMapPresenter from "./FindAddressInMapPresenter"

const FindAddressInMapContainer = () => {
    const [addressInfo, setAddressInfo] = useState({
        address: '부산 사상구 주례로 47',
        address_detail: '주례동 88'
    })

    const selectAddress = () => {
        setAddressInfo({
            address: '',
            address_detail: ''
        })
    }

    const getAddress = (address_info) => {
        const { address, road_address } = address_info;
        const saveAddress = {
            address: '',
            address_detail: '',
        };
        
        if (!road_address) {
            saveAddress.address = address.address_name;
        } else {
            saveAddress.address = road_address.address_name;
        }

        saveAddress.address_detail = `${address.region_3depth_name} ${address.main_address_no}`;
        setAddressInfo(saveAddress);
    }

    return (
        <FindAddressInMapPresenter
            addressInfo={addressInfo}
            selectAddress={selectAddress}
            getAddress={getAddress}
        />
    );
};

export default FindAddressInMapContainer;