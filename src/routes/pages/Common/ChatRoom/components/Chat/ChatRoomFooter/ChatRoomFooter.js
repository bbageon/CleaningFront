import './ChatRoomFooter.css';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Camera } from '../../../../../../../assets/icons/camera.svg';

const ChatRoomFooter = ({
    inputChatRef,

    sendChat,

    chatMessage,
    setChatMessage,
    toggleShowSelectPicture,
    selectMultiPictures,
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
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                />
                <input
                    id='chat-image-upload'
                    type='file'
                    accept='image/*'
                    multiple
                    style={{ display: 'none' }}
                    onChange={e => selectMultiPictures(e)}
                />
                <Camera
                    className='chat-input-camera'
                    // onClick={() => { toggleShowSelectPicture() }}
                    onClick={() => {
                        document.getElementById('chat-image-upload').click();
                    }}
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