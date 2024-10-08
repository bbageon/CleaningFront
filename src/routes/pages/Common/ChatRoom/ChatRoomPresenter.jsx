import './ChatRoom.css';
import { MainLayout } from '../../../../components';
import ChatRoomTop from './components/Chat/ChatRoomTop/ChatRoomTop';
import ChatRoomBody from './components/Chat/ChatRoomBody';
import ChatRoomFooter from './components/Chat/ChatRoomFooter/ChatRoomFooter';
import SelectPicture from './components/Picture/SelectPictureBox/SelectPictureBox';

const ChatRoomPresenter = ({
    clientId,
    chatRef,

    chatTitle,
    chatList,
    chatMessage,
    setChatMessage,

    isShowSelectPicture,
    toggleShowSelectPicture,
    sendSelectPicture,

    canSelectPictures,
    selectedPictures,
    addSelectPicture,

    searchChat,
    sendChat,

    inputChatRef,
}) => {
    return (
        <div className='chat-room-container'>
            <ChatRoomTop
                searchChat={searchChat}
                chatTitle={chatTitle}
            />
            <ChatRoomBody
                clientId={clientId}
                chatList={chatList}
                chatRef={chatRef}
            />
            <ChatRoomFooter
                inputChatRef={inputChatRef}
                chatMessage={chatMessage}
                setChatMessage={setChatMessage}
                toggleShowSelectPicture={toggleShowSelectPicture}
                sendChat={sendChat}
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