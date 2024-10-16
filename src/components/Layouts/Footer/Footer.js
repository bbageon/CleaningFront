import './Footer.css';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as Chat } from '../../../assets/icons/chat.svg';
import { ReactComponent as Broom } from '../../../assets/icons/broom.svg';
import { ReactComponent as Profile } from '../../../assets/icons/profile.svg';
import { useNavigate } from 'react-router-dom';

const Icons = [
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

    /* ===== NAVIGATE ===== */
    const navigate = useNavigate();

    return (
        <div className='footer-container'>
            {
                Icons.map((icon, index) => {
                    return (
                        <div className='footer-icon-wrap' key={index} onClick={()=>{navigate(icon.url)}}>
                            <div className='footer-icon'>
                                {icon.icon}
                            </div>
                            <div className='footer-text'>
                                <span className='small'>{icon.title}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Footer;