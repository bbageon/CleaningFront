import { useEffect, useState } from "react";
import ChatRoomListPresenter from "./ChatRoomListPresenter"
import API from "../../../../api/API";
import { getCookie } from "util";

const ChatRoomListContainer = () => {
    // const [chatList, setChatList] = useState([
    //     {
    //         title: '김재모의 카피바라 청소',
    //         subtitle: '무엇을 도와드릴까요?',
    //         chat_time: '오전 9: 45',
    //         alert_count: '1',
    //         chat_status: '청소 완료',
    //     },
    //     {
    //         title: '김재모의 카피바라 청소',
    //         subtitle: '무엇을 도와드릴까요?',
    //         chat_time: '오전 9: 45',
    //         alert_count: '1',
    //         chat_status: '청소 완료',
    //     },
    //     {
    //         title: '김재모의 카피바라 청소',
    //         subtitle: '무엇을 도와드릴까요?',
    //         chat_time: '오전 9: 45',
    //         alert_count: '1',
    //         chat_status: '청소 완료',
    //     },
    //     {
    //         title: '김재모의 카피바라 청소',
    //         subtitle: '무엇을 도와드릴까요?',
    //         chat_time: '오전 9: 45',
    //         alert_count: '1',
    //         chat_status: '청소 완료',
    //     },
    //     {
    //         title: '김재모의 카피바라 청소',
    //         subtitle: '무엇을 도와드릴까요?',
    //         chat_time: '오전 9: 45',
    //         alert_count: '1',
    //         chat_status: '청소 완료',
    //     },
    //     {
    //         title: '김재모의 카피바라 청소',
    //         subtitle: '무엇을 도와드릴까요?',
    //         chat_time: '오전 9: 45',
    //         alert_count: '1',
    //         chat_status: '청소 완료',
    //     },
    //     {
    //         title: '김재모의 카피바라 청소',
    //         subtitle: '무엇을 도와드릴까요?',
    //         chat_time: '오전 9: 45',
    //         alert_count: '1',
    //         chat_status: '청소 완료',
    //     },
    // ]);
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