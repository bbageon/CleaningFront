import './FindAddressTop.css';
import { ReactComponent as Back } from '../../../../../../assets/icons/back.svg';
import { useNavigate } from 'react-router-dom';

const FindAddressTop = ({

}) => {
    const navigate = useNavigate();

    return (
        <div className='find-address-top'>
            <div
                className='back-button'
                onClick={() => navigate(-1)}
            >
                <Back />
            </div>
            <div className='top-title'>
                지도에서 위치 확인
            </div>
        </div>
    )
}

export default FindAddressTop;