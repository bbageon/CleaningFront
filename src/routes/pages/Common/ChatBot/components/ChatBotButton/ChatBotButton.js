import './ChatBotButton.css';

const ChatBotButton = ({
    option_title,
    content,
    onClick,
    buttonType,
}) => {
    return (
        <div className='chatbot-button-container'>
            <span className='chatbot-title'>{option_title}</span>
            <button
                className={`chatbot-button ${buttonType}`}
                onClick={onClick}
            >
                {content}
            </button>
        </div>
    )
}

export default ChatBotButton;