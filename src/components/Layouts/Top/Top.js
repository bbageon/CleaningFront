import './Top.css';
import { ReactComponent as Back } from '../../../assets/icons/back.svg';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as Cart } from '../../../assets/icons/cart.svg';
import { useNavigate } from 'react-router-dom';

const Top = ({
    title,
    background,
    iconColor,
    absolute,
    top,
}) => {

    /* ===== NAVIGATE ===== */
    const navigate = useNavigate();

    return (
        <div
            className='top-container'
            style={{
                background: background ? background : 'none',
                position: absolute ? 'absolute' : 'relative',
                top: absolute ? top : 'none',
            }}
        >
            <div className='top-back'>
                <Back
                    fill={ iconColor ? iconColor : '#000000' }
                    onClick={() => { navigate(-1) }}
                />
            </div>
            {
                title ? (
                    <span className='top-title'>
                        {title}
                    </span>

                ) : (
                    <></>
                )
            }
            <div className='top-icons'>
                <Home
                    fill={ iconColor ? iconColor : '#005abd'}
                    onClick={() => { navigate('/') }}
                />
                <Cart
                    fill={ iconColor ? iconColor : '#005abd'}
                />
            </div>
        </div>
    );
};

export default Top;