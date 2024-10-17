import './ChatRoomList.css';
import { MainLayout, Top } from '../../../../components';
import ChatList from './components/ChatList';

const ChatRoomListPresenter = ({
    chatList,
}) => {
    return (
        <MainLayout>
            <Top
                title={'대화방 목록'}
                notShowIcon={true}
            />
            <ChatList
                chatList={chatList}
            />
        </MainLayout>
    );
};

export default ChatRoomListPresenter;