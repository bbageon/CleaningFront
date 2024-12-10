import './RegistrationInput.css';

const RegistrationInput = ({
    title,
    placeholder,
    value,
    onChange,
    required = false,
}) => {
    return (
        <div className='registration-input'>
            {
                title &&
                <div className={`input-title ${required ? 'required' : '' }`}>{title}</div>
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