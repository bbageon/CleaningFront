import './Textarea.css';

const Textarea = ({
    value,
    placeholder,
    readOnly,
}) => {
    return (
        <div className='input-container'>
            <textarea
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
            />
            <div className='end'>
                <span className='large gray1'>0 / 500</span>
            </div>
        </div>
    );
};

export default Textarea;