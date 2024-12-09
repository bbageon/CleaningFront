// import exp from 'constants';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({
    title,
    explain,
    onClick,

    disabled,
    width,
    height,
    padding,
    wrapPadding,
    color,
    backgroundColor,
    fontWeight,
    fontSize,
    borderRadius,
    filter,
    image,

    employee,

}) => {
    return (
        <div className='button-wrap' style={{ padding: wrapPadding }}>
            <button
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    padding: padding,
                    color: color,
                    backgroundColor: backgroundColor,
                    fontSize: fontSize,
                    fontWeight: `${fontWeight}`,
                    borderRadius: borderRadius,
                    filter: filter,
                }}
                onClick={onClick}
                disabled={disabled}
            >
                {employee === true ? (
                    <div className='employee-button'>
                        {image && <img src={image} alt={"이미지"} />}
                        <div className='employee-button-explain'>
                            <span style={{fontSize : '20px', fontWeight : '400'}}>{title}</span>
                            <span style={{fontSize : '14px', fontWeight : '300', color : '#797979'}}>{explain}</span>
                        </div>
                    </div>
                ) : (
                    <span>{title}</span>
                )}
            </button>
        </div>
    );
};

export default Button;