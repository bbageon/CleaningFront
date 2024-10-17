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
    backgroundColor,
    fontWeight,
    fontSize,
    borderRadius,

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
                    backgroundColor: backgroundColor,
                    fontSize: fontSize,
                    fontWeight: `${fontWeight}`,
                    borderRadius: borderRadius,
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