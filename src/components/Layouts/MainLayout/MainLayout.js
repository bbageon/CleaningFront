import Footer from '../Footer/Footer';
import './MainLayout.css';

const MainLayout = ({
    children,
    padding,
    footer,
    backgroundColor,
    full,
}) => {
    return (
        <div className='main-layout'
            style={{
                height: full ? '100vh' : 'auto',
                padding: padding,
                backgroundColor: backgroundColor
            }}>
            {children}
            {
                footer ? (
                    <Footer />
                ) : (
                    <></>
                )
            }
        </div>
    );
};

export default MainLayout;