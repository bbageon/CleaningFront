import { useNavigate } from 'react-router-dom';
import './ChatList.css';

const ChatList = ({
    chatList
}) => {
    const navigate = useNavigate();
    const regex = /^<!.*!>$/;

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
                                    <span className='chat-title'>{chat.chat_room_name}</span>
                                    <span className='chat-time'>{chat.chat_time}</span>
                                </div>
                                <div className='chat-info-line'>
                                    <span className='chat-subtitle'>
                                        {
                                            regex.test(chat.last_chat_message) ?
                                                `사진을 보냈습니다` :
                                                chat.last_chat_message
                                        }
                                    </span>
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