import './RegistrationInput.css';

const RegistrationInput = ({
    title,
    placeholder,
    value,
    onChange,
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
                onChange={onChange}
            />
        </div>
    )
}

export default RegistrationInput;