import './ChatBallon.css';

const ChatBallon = ({
    clientId,
    chatInfo,
}) => {
    const { sender, message } = chatInfo;

    return (
        <div
            className={`chat-ballon ${clientId === sender ? 'self' : 'other'}`}
        >
            {message}
        </div>
    )
}

export default ChatBallon;