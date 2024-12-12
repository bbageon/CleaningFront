import { useEffect, useState } from "react";
import ChatRoomListPresenter from "./ChatRoomListPresenter"
import API from "../../../../api/API";
import { getCookie } from "util";

const ChatRoomListContainer = () => {
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        (
            async () => {
                try {
                    const user_id = getCookie('id');
                    const result = await API.getUserChatRoom(user_id);
                    if (result.status !== 200) throw new Error(`[ChatRoomListContainer] [useEffect] Error`);
                    console.log(result.data);
                    setChatList(result.data.chat_rooms);

                } catch (e) {
                    
                }
            }
        )()
    }, []);

    return (
        <ChatRoomListPresenter
            chatList={chatList}
        />
    );
};

export default ChatRoomListContainer;