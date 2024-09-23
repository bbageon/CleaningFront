import './Chat.css';

const Chat = ({
    clientId,
    chatInfo,
}) => {
    const { sender, content } = chatInfo;

    return (
        <div
            className={`chat ${clientId === sender ? 'self' : 'other'}`}
        >
            {content}
        </div>
    )
}

export default Chat;