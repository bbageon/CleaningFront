import './RegistrationAddress.css';
import RegistrationInput from '../RegistrationInput/RegistrationInput';
import RegistrationLocationButton from '../RegistrationLocationButton';

import { ReactComponent as Home } from '../../../../../../assets/icons/locationHome.svg';
import { ReactComponent as Company } from '../../../../../../assets/icons/company.svg';
import { ReactComponent as EmptyPin } from '../../../../../../assets/icons/emptyPin.svg';
import { useEffect, useState } from 'react';

const RegistrationAddress = ({
    addressInfo,
    setAddressInfo,

    registerAddress,
}) => {

    /* ===== VARIABLES ===== */
    const { address, address_detail } = addressInfo;
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

    /* ===== STATE ===== */
    const [selectLocationButton, setIsSelectLocationButton] = useState('');
    const [isInputLocation, setIsInputLocation] = useState(false);

    /* ===== HOOKS ===== */
    useEffect(() => {
        setIsInputLocation(selectLocationButton === '직접입력');
    }, [selectLocationButton]);

    /* ===== RENDER ===== */
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

                        setAddressInfo={setAddressInfo}
                    />
                    <div className='registration-location-buttons'>
                        <RegistrationLocationButton
                            locationButtonInfo={locationButtons[0]}

                            selectLocationButton={selectLocationButton}
                            setIsSelectLocationButton={setIsSelectLocationButton}
                            onClick={() => {
                                setIsSelectLocationButton(locationButtons[0].title);
                                setAddressInfo(prev => {
                                    return {
                                        ...prev,
                                        address_name: locationButtons[0].title
                                    }
                                });
                            }}
                        />
                        <RegistrationLocationButton
                            locationButtonInfo={locationButtons[1]}

                            selectLocationButton={selectLocationButton}
                            setIsSelectLocationButton={setIsSelectLocationButton}
                            onClick={() => {
                                setIsSelectLocationButton(locationButtons[1].title);
                                setAddressInfo(prev => {
                                    return {
                                        ...prev,
                                        address_name: locationButtons[1].title
                                    }
                                });
                            }}
                        />
                        <RegistrationLocationButton
                            locationButtonInfo={locationButtons[2]}

                            selectLocationButton={selectLocationButton}
                            setIsSelectLocationButton={setIsSelectLocationButton}
                            onClick={() => {
                                setIsSelectLocationButton(locationButtons[2].title);
                                setAddressInfo(prev => {
                                    return {
                                        ...prev,
                                        address_name: ''
                                    }
                                });
                            }}
                        />
                    </div>
                    {
                        isInputLocation &&
                        <RegistrationInput
                            placeholder='직접 입력 시 활성화'
                            value={addressInfo?.address_name}
                            onChange={e => {
                                setAddressInfo(prev => {
                                    const address_name = e.target.value;
                                    return {
                                        ...prev,
                                        address_name
                                    }
                                });
                            }}
                        />
                    }
                </div>
                <div>
                    <RegistrationInput
                        title='공동현관 비밀번호'
                        placeholder='예) *23#'
                        value={addressInfo?.entrance_number}
                        onChange={e => {
                            setAddressInfo(prev => {
                                const entrance_number = e.target.value;
                                return {
                                    ...prev,
                                    entrance_number
                                }
                            });
                        }}
                    />
                    <RegistrationInput
                        title='찾아오시는 길 안내'
                        placeholder='예) 정문 옆 계단으로 올라가야합니다.'
                        value={addressInfo?.directions}
                        onChange={e => {
                            setAddressInfo(prev => {
                                const directions = e.target.value;
                                return {
                                    ...prev,
                                    directions
                                }
                            });
                        }}
                    />
                    <RegistrationInput
                        title='평수'
                        placeholder='예) 숫자만 입력해 주세요. (1, 10, 20, ...)'
                        required
                        // value={addressInfo?.meter}
                        onChange={e => {
                            setAddressInfo(prev => {
                                const meter = Number(e.target.value);
                                return {
                                    ...prev,
                                    meter,
                                }
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default RegistrationAddress;