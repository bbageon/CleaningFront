import { useEffect } from 'react';
import './AddressInfo.css';
import { useNavigate } from 'react-router-dom';

const AddressInfo = ({
    addressInfo,
}) => {
    const navigate = useNavigate();
    const { address, address_detail } = addressInfo;
    
    return (
        <div className='address-info-box'>
            <div className='address-info'>
                <div>{address}</div>
                <div>{address_detail}</div>
            </div>
            <div className='registration-button'>
                이 위치로 주소등록
            </div>
        </div>
    )
}

export default AddressInfo;