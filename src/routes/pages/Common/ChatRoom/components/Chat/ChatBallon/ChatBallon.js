import ChatImage from '../ChatImage';
import './ChatBallon.css';

const ChatBallon = ({
    clientId,
    chatInfo,
}) => {
    const { sender, message } = chatInfo;
    const regex = /^<!.*!>$/;

    return (
        <div
            className={`chat-ballon ${clientId === sender ? 'self' : 'other'}`}
        >
            {
                regex.test(message) ?
                    <ChatImage
                        imageMessage={message}
                    />
                    :
                    message
            }
        </div>
    )
}

export default ChatBallon;