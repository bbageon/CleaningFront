import { useRef, useState } from "react";
import ChatRoomPresenter from "./ChatRoomPresenter"

const ChatRoomContainer = () => {
    const [clientId, setClientId] = useState('김재모');
    const inputChatRef = useRef(null);
    const [chatMessage, setChatMessage] = useState('');

    const [chatInfo, setChatInfo] = useState({
        title: '김재모의 카피바라 청소',
        chatList: [
            {
                sender: '안김재모',
                content: `안녕하세요 김재모 입니다.
                            무엇을 도와드릴까요 ?`,
            },
            {
                sender: '김재모',
                content: `평당 평균 가격이 어느정도 되나요? 시간당 평균 가격이 어떻게 되나요?`,
            },
            {
                sender: '안김재모',
                content: `저도 몰라요`,
            },
            {
                sender: '김재모',
                content: `아는게 뭐예요?`,
            },
            {
                sender: '안김재모',
                content: `차단하겠습니다.`,
            },
        ]
    })

    const searchChat = () => {

    }

    const sendChat = () => {
        const chatText = inputChatRef.current.value;
    }

    return (
        <ChatRoomPresenter
            clientId={clientId}

            chatInfo={chatInfo}
            chatMessage={chatMessage}
            setChatMessage={setChatMessage}

            searchChat={searchChat}

            inputChatRef={inputChatRef}
        />
    );
};

export default ChatRoomContainer;