import './FindLocation.css';
import { ReactComponent as Location } from '../../../../../../assets/icons/location.svg';
import { useNavigate } from 'react-router-dom';

const FindLocation = ({

}) => {
    const navigate = useNavigate();

    return (
        <div
            className="find-location-wrap"
            onClick={() => {
                navigate('/findaddressinmap')
            }}
        >
            <Location />
            현재 위치로 찾기
        </div>
    )
}

export default FindLocation;