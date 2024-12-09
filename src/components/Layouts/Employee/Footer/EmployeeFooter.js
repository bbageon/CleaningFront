import MainLayout from "components/Layouts/MainLayout"
import { ReactComponent as Home } from '../../../../assets/icons/employee_home_icon.svg';
import { ReactComponent as Chat } from '../../../../assets/icons/employee_chat_icon.svg';
import { ReactComponent as List } from '../../../../assets/icons/employee_list_icon.svg';
import { ReactComponent as Profile } from '../../../../assets/icons/employee_profile_icon.svg';
import { useNavigate } from "react-router-dom";

import './EmployeeFooter.css';

const Buttons = [
    {
        icon: <Home fill={'#FFFFFF'} />,
        title: '홈',
        url: '/employee/'
    },
    {
        icon: <Chat fill={'#FFFFFF'} />,
        title: '채팅',
        url: '/employee/chatlist'
    },
    {
        icon: <List fill={'#FFFFFF'} />,
        title: '목록',
        url: '/employee/requestlist'
    },
    {
        icon: <Profile fill={'#FFFFFF'} />,
        title: '프로필',
        url: '/employee/profile'
    },
]

const EmployeeFooter = ({

}) => {
    const navigate = useNavigate();

    return (
        <div className="employee-footer-container">
            {
                Buttons.map((button, index) => {
                    return (
                        <div
                            className='footer-icon-wrap'
                            key={index}
                            onClick={() => { navigate(button.url) }}
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
    )
}

export default EmployeeFooter;