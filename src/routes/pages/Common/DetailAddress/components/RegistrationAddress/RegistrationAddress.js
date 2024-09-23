import './RegistrationAddress.css';
import RegistrationInput from '../RegistrationInput/RegistrationInput';
import RegistrationLocationButton from '../RegistrationLocationButton';

import { ReactComponent as Home } from '../../../../../../assets/icons/locationHome.svg';
import { ReactComponent as Company } from '../../../../../../assets/icons/company.svg';
import { ReactComponent as EmptyPin } from '../../../../../../assets/icons/emptyPin.svg';
import { useEffect, useState } from 'react';

const RegistrationAddress = ({
    addressInfo,
}) => {
    const { address, address_detail } = addressInfo;
    const [selectLocationButton, setIsSelectLocationButton] = useState('');
    const [isInputLocation, setIsInputLocation] = useState(false);
    const locationButtons = [
        {
            icon: Home,
            title: '우리집',
        },
        {
            icon: Company,
            title: '회사',
        },
        {
            icon: EmptyPin,
            title: '직접입력',
        },
    ]

    useEffect(() => {
        setIsInputLocation(selectLocationButton === '직접입력');
    }, [selectLocationButton]);

    return (
        <div className="registration-address">
            <div className="registration-address-info">
                <span>{address}</span>
                <span>{address_detail}</span>
            </div>
            <div className="registration-address-input">
                <div className='common'>
                    <RegistrationInput
                        placeholder='상세주소 추가'
                    />
                    <div className='registration-location-buttons'>
                        <RegistrationLocationButton
                            locationButtonInfo={locationButtons[0]}
                            
                            selectLocationButton={selectLocationButton}
                            setIsSelectLocationButton={setIsSelectLocationButton}
                        />
                        <RegistrationLocationButton
                            locationButtonInfo={locationButtons[1]}
                            
                            selectLocationButton={selectLocationButton}
                            setIsSelectLocationButton={setIsSelectLocationButton}
                        />
                        <RegistrationLocationButton
                            locationButtonInfo={locationButtons[2]}
                            
                            selectLocationButton={selectLocationButton}
                            setIsSelectLocationButton={setIsSelectLocationButton}
                        />
                    </div>
                    {
                        isInputLocation &&
                        <RegistrationInput
                            placeholder='직접 입력 시 활성화'
                        />
                    }
                </div>
                <div>
                    <RegistrationInput
                        title='공동현관 비밀번호'
                        placeholder='예) *23#'
                    />
                    <RegistrationInput
                        title='찾아오시는 길 안내'
                        placeholder='예) 정문 옆 계단으로 올라가야합니다.'
                    />
                </div>
            </div>
            <div className="registration-address-button">
                주소 등록
            </div>
        </div>
    )
}

export default RegistrationAddress;