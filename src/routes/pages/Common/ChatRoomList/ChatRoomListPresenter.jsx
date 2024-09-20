import './ChatRoomList.css';
import { MainLayout } from '../../../../components';
import ChatList from './components/ChatList';

const ChatRoomListPresenter = ({
    chatList,
}) => {
    return (
        <MainLayout>
            <div className="room-list-header">
                대화방 목록
            </div>
            <ChatList
                chatList={chatList}
            />
        </MainLayout>
    );
};

export default ChatRoomListPresenter;