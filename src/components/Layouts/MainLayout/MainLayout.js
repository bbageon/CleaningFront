import Footer from '../Footer/Footer';
import './MainLayout.css';

const MainLayout = ({
    children,
    padding,
    footer,
}) => {
    return (
        <div className='main-layout' style={{padding: padding}}>
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