import './Textarea.css';

const Textarea = ({
    value,
    placeholder,
    readOnly,
    maxLength,
    onChange,
}) => {

    return (
        <div className='textarea-container'>
            <textarea
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                onChange={onChange}
                maxLength={maxLength}
            />
            <div className='end'>
                <span className={`textarea-count ${value.length === maxLength ? 'max' : ''} large gray1`}>{value.length} / {maxLength}</span>
            </div>
        </div>
    );
};

export default Textarea;