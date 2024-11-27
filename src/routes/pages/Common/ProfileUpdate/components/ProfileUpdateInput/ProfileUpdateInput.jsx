import './ProfileUpdateInput.css';
import { Content } from 'components';

const ProfileUpdateInput = ({
    label,

    warning = false,

    value,
    setValue,
    placeholder,

    disabled = false,

    maxLength,
}) => {
    /* ===== FUNCTION ===== */
    const handleSetValue = (e) => {
        setValue(e.target.value);
    };

    const handleWarning = () => {
        return value?.length === maxLength | value?.length === 0;
    };

    /* ===== RENDER ===== */
    return (
        <Content>
            <span
                className='bold'
                style={{
                    width: '100%',
                }}
            >{label}</span>
            <div className='profile-update-input-container'>
                <input
                    className={`profile-update-input ${handleWarning() ? 'warning' : ''}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleSetValue}
                    disabled={disabled}
                    maxLength={maxLength}
                />
            </div>
            {
                warning ? (
                    <span
                        className='required'
                        style={{
                            width: '100%',
                            paddingTop: '10px',
                            color: value?.length === maxLength ? 'var(--red-color)' : '',
                        }}
                    >{warning}</span>
                ) : (
                    null
                )
            }
        </Content>
    );
};

export default ProfileUpdateInput;