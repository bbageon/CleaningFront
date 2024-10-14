import './Textarea.css';

const Textarea = ({
    value,
    placeholder,
    readOnly,
    onChange,
    maxLength,
}) => {

    /* ===== FUNCTION ===== */
    const checkLength = () => {

    }

    return (
        <div className='input-container'>
            <textarea
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                onChange={onChange}
                maxLength={maxLength}
            />
            <div className='end'>
                <span className='large gray1'>0 / {maxLength}</span>
            </div>
        </div>
    );
};

export default Textarea;