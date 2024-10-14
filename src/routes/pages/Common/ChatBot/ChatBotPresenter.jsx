import './ChatBot.css';
import { MainLayout, Top } from '../../../../components';
import ChatBotTop from './components/ChatBotTop';
import ChatBotBody from './components/ChatBotBody';

const ChatBotPresenter = ({
    chatList,
}) => {
    return (
        <div className='chat-room-container'>
            <Top
                notShowIcon={true}
                title={'빠른 요청'}
                paddingBottom={'1rem'}
            />
            <ChatBotBody
                chatList={chatList}
            />
        </div>
    );
};

export default ChatBotPresenter;