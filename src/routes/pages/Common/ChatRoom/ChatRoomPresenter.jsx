import './ChatRoom.css';
import { MainLayout } from '../../../../components';
import ChatRoomTop from './components/ChatRoomTop';
import ChatRoomBody from './components/ChatRoomBody';
import ChatRoomFooter from './components/ChatRoomFooter';

const ChatRoomPresenter = ({
    clientId,

    chatInfo,
    chatMessage,
    setChatMessage,

    searchChat,

    inputChatRef,
}) => {
    return (
        <div className='chat-room-container'>
            <ChatRoomTop
                searchChat={searchChat}
                chatTitle={chatInfo.title}
            />
            <ChatRoomBody
                clientId={clientId}
                chatList={chatInfo.chatList}
            />
            <ChatRoomFooter
                inputChatRef={inputChatRef}
                chatMessage={chatMessage}
                setChatMessage={setChatMessage}
            />
        </div>
    );
};

export default ChatRoomPresenter;