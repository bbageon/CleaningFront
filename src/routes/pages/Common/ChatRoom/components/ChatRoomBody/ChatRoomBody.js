import './ChatRoomBody.css';
import Chat from '../Chat/Chat';

const ChatRoomBody = ({
    clientId,
    chatList,
}) => {
    return (
        <div className="chat-room-body">
            {
                chatList?.map(chat => (
                    <Chat
                        clientId={clientId}
                        chatInfo={chat}
                    />
                ))
            }
        </div>
    )
}

export default ChatRoomBody;