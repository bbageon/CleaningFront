import './Button.css';

const Button = ({
    title,
    onClick,

    disabled,
    width,
    height,
    padding,
    wrapPadding,
    color,

    icon,
}) => {
    return (
        <div className='button-wrap' style={{ padding: wrapPadding }}>
            <button
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    padding: padding,
                    color: color,
                }}
                onClick={onClick}
                disabled={disabled}
            >
                {title}
            </button>
        </div>
    );
};

export default Button;