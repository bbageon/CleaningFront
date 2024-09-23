import './ChatRoomTop.css';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from '../../../../../../../assets/icons/back.svg';
import { ReactComponent as Search } from '../../../../../../../assets/icons/search.svg';

const ChatRoomTop = ({
    searchChat,
    chatTitle,
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
                {chatTitle}
            </div>
            <div
                className='search-button'
                onClick={() => searchChat()}
            >
                <Search />
            </div>
        </div>
    )
}

export default ChatRoomTop;