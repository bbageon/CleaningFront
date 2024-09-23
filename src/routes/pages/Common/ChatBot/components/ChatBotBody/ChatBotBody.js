import './ChatBotBody.css';
import ChatBallon from '../ChatBotBallon/ChatBotBallon';

const ChatBotBody = ({
    chatList,
}) => {
    return (
        <div className="chat-room-body">
            {
                chatList?.map((chat, idx) => (
                    <ChatBallon
                        chatInfo={chat}
                        type={chat.type}
                        buttonType={idx > 1 && 'dark'}
                    />
                ))
            }
        </div>
    )
}

export default ChatBotBody;