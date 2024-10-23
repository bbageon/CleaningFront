import './RegistrationLocationButton.css';

const RegistrationLocationButton = ({
    locationButtonInfo,

    selectLocationButton,
    onClick,
}) => {
    return (
        <div
            className={`registration-location-button ${locationButtonInfo.title === selectLocationButton ? 'active' : ''}`}
            onClick={onClick}
        >
            <locationButtonInfo.icon />
            <div className='location-button-title'>
                {locationButtonInfo.title}
            </div>
        </div>
    )
}

export default RegistrationLocationButton;