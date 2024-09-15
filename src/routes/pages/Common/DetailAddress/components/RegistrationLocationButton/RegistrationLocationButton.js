import './RegistrationLocationButton.css';

const RegistrationLocationButton = ({
    locationButtonInfo,

    selectLocationButton,
    setIsSelectLocationButton,
}) => {
    return (
        <div
            className={`registration-location-button ${locationButtonInfo.title === selectLocationButton ? 'active' : ''}`}
            onClick={() => {
                setIsSelectLocationButton(locationButtonInfo.title);
            }}
        >
            <locationButtonInfo.icon />
            <div className='location-button-title'>
                {locationButtonInfo.title}
            </div>
        </div>
    )
}

export default RegistrationLocationButton;