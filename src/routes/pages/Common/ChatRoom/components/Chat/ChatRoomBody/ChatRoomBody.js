import './ChatRoomBody.css';
import ChatBallon from '../ChatBallon/ChatBallon';

const ChatRoomBody = ({
    clientId,
    chatList,
}) => {
    return (
        <div className="chat-room-body">
            {
                chatList?.map(chat => (
                    <ChatBallon
                        clientId={clientId}
                        chatInfo={chat}
                    />
                ))
            }
        </div>
    )
}

export default ChatRoomBody;