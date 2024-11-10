import { useEffect, useState } from "react";
import DetailAddressPresenter from "./DetailAddressPresenter"
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateUserAddress } from "hooks/UserAddressHooks";
import { useAuthStore } from "store";

const DetailAddressContainer = () => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();
    const location = useLocation();

    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);

    /* ===== STATE ===== */
    const [addressInfo, setAddressInfo] = useState({
        user_id: userId,
        address: '부산광역시 사상구 주례로 47',
        address_detail: '부산광역시 사상구 주례동 88',
        added_detail: '',
        address_name: '',
        entrance_number: '',
        directions: '',
        meter: 0,
    })

    /* ===== MUTATE ===== */
    const { mutate: addToAddress } = useCreateUserAddress();

    useEffect(() => {
        if (!location.state) return;

        const { address, address_detail } = location?.state;
        setAddressInfo(prev => {
            return {
                ...prev,
                address,
                address_detail: `${address.split(' ').slice(0, 2).join(' ')} ${address_detail}`
            }
        });
    }, []);

    /* ===== FUNCTION ===== */
    const registerAddress = () => {
        addToAddress(addressInfo);
        navigate(-2);
    };

    /* ===== RENDER ===== */
    return (
        <DetailAddressPresenter
            addressInfo={addressInfo}
            setAddressInfo={setAddressInfo}

            registerAddress={registerAddress}
        />
    );
};

export default DetailAddressContainer;