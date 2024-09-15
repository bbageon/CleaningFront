import './RegistrationInput.css';

const RegistrationInput = ({
    title,
    placeholder,
    value,
    setValue,
}) => {
    return (
        <div className='registration-input'>
            {
                title &&
                <div className='input-title'>{title}</div>
            }
            <input
                placeholder={placeholder}
                value={value}
                onClick={(e) => {
                    if (!setValue) return
                    setValue(e.target.value)
                }}
            />
        </div>
    )
}

export default RegistrationInput;