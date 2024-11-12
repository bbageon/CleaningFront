import './Top.css';
import { ReactComponent as Back } from '../../../assets/icons/back.svg';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as Cart } from '../../../assets/icons/cart.svg';
import { useNavigate } from 'react-router-dom';

const Top = ({
    title,
    notShowIcon,
    background,
    iconColor,
    absolute,
    top,
    paddingBottom,
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
                paddingBottom: paddingBottom,
            }}
        >
            <div className='top-back'>
                <Back
                    fill={iconColor ? iconColor : '#000000'}
                    onClick={() => { navigate(-1) }}
                />
            </div>
            {
                title ? (
                    <div className='top-title-wrap'>
                        <span className='top-title'>
                            {title}
                        </span>
                    </div>
                ) : (
                    <></>
                )
            }
            <div className='top-icons'>
                {
                    notShowIcon ? (
                        <></>
                    ) : (
                        <>
                            <Home
                                fill={iconColor ? iconColor : '#005abd'}
                                onClick={() => { navigate('/main') }}
                            />
                            <Cart
                                fill={iconColor ? iconColor : '#005abd'}
                                onClick={() => { navigate('/shoppingcart')}}
                            />
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Top;