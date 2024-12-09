import './ChatBot.css';
import { MainLayout, Top } from '../../../../components';
import ChatBotTop from './components/ChatBotTop';
import ChatBotBody from './components/ChatBotBody';
import { DateModal } from './components/Modal/DateModal/DateModal';

const ChatBotPresenter = ({
    chatList,

    showSelectDate,
    showSelectDateModal,

    onSelectDate,
    selectedDate,
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
            {
                showSelectDate &&
                <DateModal
                    showSelectDateModal={showSelectDateModal}
                    onSelectDate={onSelectDate}
                    selectedDate={selectedDate}
                />
            }
        </div>
    );
};

export default ChatBotPresenter;