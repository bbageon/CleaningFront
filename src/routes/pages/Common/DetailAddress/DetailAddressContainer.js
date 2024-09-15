import { useEffect, useRef, useState } from "react";
import DetailAddressPresenter from "./DetailAddressPresenter"

const DetailAddressContainer = () => {
    const [addressInfo, setAddressInfo] = useState({
        address: '부산광역시 사상구 주례로 47',
        address_detail: '부산광역시 사상구 주례동 88',
    })
    return (
        <DetailAddressPresenter
            addressInfo={addressInfo}
        />
    );
};

export default DetailAddressContainer;