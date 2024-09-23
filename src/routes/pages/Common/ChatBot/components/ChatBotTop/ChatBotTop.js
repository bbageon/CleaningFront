import './ChatBotTop.css';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from '../../../../../../assets/icons/back.svg';

const ChatBotTop = ({

}) => {
    const navigate = useNavigate();

    return (
        <div className="chat-room-top">
            <div
                className="back-button"
                onClick={() => navigate(-1)}
            >
                <Back />
            </div>
            <div className="chat-room-title">
                빠른 요청
            </div>
            <div className='empty-space' />
        </div>
    )
}

export default ChatBotTop;