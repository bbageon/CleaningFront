import './Content.css';

const Content = ({
    children,
    paddingLeft,
    paddingRight,
    gap,
    border,
}) => {
    return (
        <div
            className='content-container'
            style={{
                paddingLeft: `${paddingLeft}px`,
                paddingRight: `${paddingRight}px`,
                gap: `${gap}px`,
                borderBottom: border ? '1px solid #E3E3E3' : 'none'
            }}
        >
            {children}
        </div>
    );
};

export default Content;