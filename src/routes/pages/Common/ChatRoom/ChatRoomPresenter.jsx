import './ChatRoom.css';
import { MainLayout } from '../../../../components';
import ChatRoomTop from './components/Chat/ChatRoomTop/ChatRoomTop';
import ChatRoomBody from './components/Chat/ChatRoomBody';
import ChatRoomFooter from './components/Chat/ChatRoomFooter/ChatRoomFooter';
import SelectPicture from './components/Picture/SelectPictureBox/SelectPictureBox';

const ChatRoomPresenter = ({
    clientId,

    chatInfo,
    chatMessage,
    setChatMessage,

    isShowSelectPicture,
    toggleShowSelectPicture,
    sendSelectPicture,

    canSelectPictures,
    selectedPictures,
    addSelectPicture,

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
                toggleShowSelectPicture={toggleShowSelectPicture}
            />
            {
                isShowSelectPicture &&
                <SelectPicture
                    toggleShowSelectPicture={toggleShowSelectPicture}
                    sendSelectPicture={sendSelectPicture}
                    canSelectPictures={canSelectPictures}
                    selectedPictures={selectedPictures}
                    addSelectPicture={addSelectPicture}
                />
            }
        </div>
    );
};

export default ChatRoomPresenter;