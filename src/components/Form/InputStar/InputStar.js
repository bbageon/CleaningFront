import { Rate } from 'antd';
import './InputStar.css';

const InputStar = ({
    disabled = false,
    defaultValue = 1,
    size = 25,
    setRating,
}) => {
    return (
        <>
            <Rate
                style={{
                    fontSize: `${size}px`
                }}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={value => {setRating(value);}}
            />
        </>
    );
};

export default InputStar;