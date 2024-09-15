import './DetailAddressTop.css';
import { ReactComponent as Back } from '../../../../../../assets/icons/back.svg';
import { useNavigate } from 'react-router-dom';

const DetailAddressTop = ({

}) => {
    const navigate = useNavigate();

    return (
        <div className='detail-address-top'>
            <div
                className='back-button'
                onClick={() => navigate(-1)}
            >
                <Back />
            </div>
            <div className='top-title'>
                주소 상세
            </div>
        </div>
    )
}

export default DetailAddressTop;