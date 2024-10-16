import { useState } from 'react';
import './Textarea.css';

const Textarea = ({
    value,
    placeholder,
    readOnly,
    maxLength,
    onChange,
}) => {

    /* ===== STATE ===== */
    const [count, setCount] = useState(0);

    /* ===== FUNCTION ===== */
    // 글자수 확인
    const handleTextCount = (e) => {
        setCount(e.target.value.length);
    };

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