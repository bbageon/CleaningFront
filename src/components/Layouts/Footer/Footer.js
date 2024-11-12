import './Footer.css';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as Chat } from '../../../assets/icons/chat.svg';
import { ReactComponent as Broom } from '../../../assets/icons/broom.svg';
import { ReactComponent as Profile } from '../../../assets/icons/profile.svg';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'store';

const Buttons = [
    {
        icon: <Home fill={'#FFFFFF'}/>,
        title: '홈',
        url: '/'
    },
    {
        icon: <Chat fill={'#FFFFFF'}/>,
        title: '대화방',
        url: '/chatroomlist'
    },
    {
        icon: <Broom fill={'#FFFFFF'}/>,
        title: '서비스 내역',
        url: '/servicehistory'
    },
    {
        icon: <Profile fill={'#FFFFFF' }/>,
        title: '프로필',
        url: '/profile'
    },
]

const Footer = ({

}) => {
    /* ===== STORE ===== */
    const userId = useAuthStore(state => state.user_id);

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    /* ===== FUNCTION ===== */
    const handleHomeButton = () => {
        if (userId) {
            
        }
    };

    return (
        <div className='footer-container'>
            {
                Buttons.map((button, index) => {

                    const buttonUrl = index === 0 && userId ? '/main' : button.url;

                    return (
                        <div
                            className='footer-icon-wrap'
                            key={index}
                            onClick={() => { navigate(buttonUrl) }}
                        >
                            <div className='footer-icon'>
                                {button.icon}
                            </div>
                            <div className='footer-text'>
                                <span className='small'>{button.title}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Footer;