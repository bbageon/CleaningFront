import './ChatRoomBody.css';
import ChatBallon from '../ChatBallon/ChatBallon';
import { useEffect, useRef } from 'react';

const ChatRoomBody = ({
    clientId,
    chatList,
    chatRef,
}) => {
    return (
        <div
            className="chat-room-body"
            ref={chatRef}
        >
            {
                chatList?.map(chat => (
                    <ChatBallon
                        clientId={clientId}
                        chatInfo={chat}
                    />
                ))
            }
        </div>
    )
}

export default ChatRoomBody;