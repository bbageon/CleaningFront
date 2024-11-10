import './RegistrationTop.css';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from '../../../../../../assets/icons/back.svg';
import { Top } from 'components';

const RegistrationTop = ({
    isSearch,
}) => {
    const navigate = useNavigate();

    return (
        <div className="registration-top">
            {/* <div
                className="back-button"
                onClick={() => navigate(-1)}
            >
                <Back />
            </div> */}
            <Top
                title={'주소 설정'}
                notShowIcon={true}
            />
            {/* <div className="title">
                주소 설정
            </div> */}
            {/* {
                isSearch ?
                    <div></div> :
                    <div
                        className="edit-button"
                        onClick={() => navigate('/detailaddress')}
                    >
                        편집
                    </div>
            } */}
        </div>
    );
};

export default RegistrationTop;