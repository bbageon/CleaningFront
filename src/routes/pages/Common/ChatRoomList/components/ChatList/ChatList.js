import { useNavigate } from 'react-router-dom';
import './ChatList.css';

const ChatList = ({
    chatList
}) => {
    const navigate = useNavigate();

    return (
        <div className='chat-list-container'>
            <div className='chat-list-wrap'>
                {
                    chatList?.map(chat => (
                        <div
                            className='chat-list'
                            onClick={() => {
                                
                                navigate(`/chatroom/${chat.room_id}`, {
                                    state: { chat_room_id: chat.chat_room_id }
                                })
                            }
                            }
                        >
                            <div className='chat-image'></div>
                            <div className='chat-info'>
                                <div className='chat-info-line'>
                                    {/* <span className='chat-title'>{chat.chat_room_name}</span> */}
                                    <span className='chat-title'>청년아이앤에스</span>
                                    {/* <span className='chat-time'>{chat.chat_time}</span> */}
                                    <span className='chat-time'>17:27</span>
                                </div>
                                <div className='chat-info-line'>
                                    <span className='chat-subtitle'>{chat.last_chat_message}</span>
                                    <span className='chat-alert-count'>{chat.alert_count}</span>
                                </div>
                                <div className='chat-info-line'>
                                    <span className='chat-status-circle'></span>
                                    {/* <span className='chat-status'>{chat.chat_status}</span> */}
                                    <span className='chat-status'>청소 완료</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ChatList;