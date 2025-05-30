import './ChatRoomFooter.css';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Camera } from '../../../../../../assets/icons/camera.svg';

const ChatRoomFooter = ({
    chatMessage,
    setChatMessage,
    sendChat,
    inputChatRef,
}) => {

    return (
        <div className="chat-room-footer">
            <div className='chat-input-wrap'>
                <textarea
                    className='chat-input'
                    ref={inputChatRef}
                    rows={1}
                    onInput={() => {
                        const textarea = inputChatRef.current;
                        textarea.style.height = 'auto'; // 높이 초기화
                        textarea.style.height = `${textarea.scrollHeight}px`; // 스크롤 높이만큼 높이 설정
                    }}
                    onChange={(e) => setChatMessage(e.target.value)}
                />
                <Camera
                    className='chat-input-camera'
                />
            </div>
            <button
                className={`chat-send-button ${chatMessage?.length > 0 ? 'active' : 'deactive'}`}
                onClick={() => sendChat()}
            >
                전송
            </button>
        </div>
    )
}

export default ChatRoomFooter;