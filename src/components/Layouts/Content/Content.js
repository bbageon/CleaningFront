import './Content.css';

const Content = ({
    children,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    gap,
    border,
    row,
}) => {
    return (
        <div
            className='content-container'
            style={{
                flexDirection: row ? 'row' : 'column',
                paddingLeft: `${paddingLeft}px`,
                paddingRight: `${paddingRight}px`,
                paddingTop: `${paddingTop}px`,
                paddingBottom: `${paddingBottom}px`,
                gap: `${gap}px`,
                borderBottom: border ? border : 'none'
            }}
        >
            {children}
        </div>
    );
};

export default Content;