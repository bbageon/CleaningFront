import './BottomButton.css';

const BottomButton = ({
    title,
    disabled,
    onClick,
}) => {
    return (
        <div className='bottom-button-container'>
            <button
                onClick={onClick}
                disabled={disabled}
            >
                {title}
            </button>
        </div>
    );
};

export default BottomButton;