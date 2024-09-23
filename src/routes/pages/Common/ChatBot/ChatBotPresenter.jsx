import './ChatBot.css';
import { MainLayout } from '../../../../components';
import ChatBotTop from './components/ChatBotTop';
import ChatBotBody from './components/ChatBotBody';

const ChatBotPresenter = ({
    chatList,
}) => {
    return (
        <div className='chat-room-container'>
            <ChatBotTop />
            <ChatBotBody
                chatList={chatList}
            />
        </div>
    );
};

export default ChatBotPresenter;