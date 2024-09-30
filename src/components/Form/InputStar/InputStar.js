import { Rate } from 'antd';
import './InputStar.css';

const InputStar = ({
    disabled = false,
    defaultValue = 0,
    size = 25,
}) => {
    return (
        <>
            <Rate
                style={{
                    fontSize: `${size}px`
                }}
                defaultValue={defaultValue}
                disabled={disabled}
            />
        </>
    );
};

export default InputStar;