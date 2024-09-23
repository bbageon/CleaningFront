import './ChatBallon.css';

const ChatBallon = ({
    clientId,
    chatInfo,
}) => {
    const { sender, content } = chatInfo;

    return (
        <div
            className={`chat-ballon ${clientId === sender ? 'self' : 'other'}`}
        >
            {content}
        </div>
    )
}

export default ChatBallon;