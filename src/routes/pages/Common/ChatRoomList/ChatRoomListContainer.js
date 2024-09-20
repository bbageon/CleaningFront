import { useState } from "react";
import ChatRoomListPresenter from "./ChatRoomListPresenter"

const ChatRoomListContainer = () => {
    const [chatList, setChatList] = useState([
        {
            title: '김재모의 카피바라 청소',
            subtitle: '무엇을 도와드릴까요?',
            chat_time: '오전 9: 45',
            alert_count: '1',
            chat_status: '청소 완료',
        },
        {
            title: '김재모의 카피바라 청소',
            subtitle: '무엇을 도와드릴까요?',
            chat_time: '오전 9: 45',
            alert_count: '1',
            chat_status: '청소 완료',
        },
        {
            title: '김재모의 카피바라 청소',
            subtitle: '무엇을 도와드릴까요?',
            chat_time: '오전 9: 45',
            alert_count: '1',
            chat_status: '청소 완료',
        },
        {
            title: '김재모의 카피바라 청소',
            subtitle: '무엇을 도와드릴까요?',
            chat_time: '오전 9: 45',
            alert_count: '1',
            chat_status: '청소 완료',
        },
        {
            title: '김재모의 카피바라 청소',
            subtitle: '무엇을 도와드릴까요?',
            chat_time: '오전 9: 45',
            alert_count: '1',
            chat_status: '청소 완료',
        },
        {
            title: '김재모의 카피바라 청소',
            subtitle: '무엇을 도와드릴까요?',
            chat_time: '오전 9: 45',
            alert_count: '1',
            chat_status: '청소 완료',
        },
        {
            title: '김재모의 카피바라 청소',
            subtitle: '무엇을 도와드릴까요?',
            chat_time: '오전 9: 45',
            alert_count: '1',
            chat_status: '청소 완료',
        },
    ])

    return (
        <ChatRoomListPresenter
            chatList={chatList}
        />
    );
};

export default ChatRoomListContainer;