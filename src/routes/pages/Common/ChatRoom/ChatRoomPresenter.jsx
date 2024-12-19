import './ChatRoom.css';
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
    selectMultiPictures,

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
                selectMultiPictures={selectMultiPictures}
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