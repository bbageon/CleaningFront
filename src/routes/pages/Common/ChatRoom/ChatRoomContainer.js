import { useRef, useState } from "react";
import ChatRoomPresenter from "./ChatRoomPresenter";
import Image01 from './components/Picture/Images/Image01.png';
import Image02 from './components/Picture/Images/Image02.png';
import Image03 from './components/Picture/Images/Image03.png';
import Image04 from './components/Picture/Images/Image04.png';
import Image05 from './components/Picture/Images/Image05.png';
import Image06 from './components/Picture/Images/Image06.png';
import Image07 from './components/Picture/Images/Image07.png';
import Image08 from './components/Picture/Images/Image08.png';
import Image09 from './components/Picture/Images/Image09.png';
import Image10 from './components/Picture/Images/Image10.png';
import Image11 from './components/Picture/Images/Image11.png';
import Image12 from './components/Picture/Images/Image12.png';
import Image13 from './components/Picture/Images/Image13.png';
import Image14 from './components/Picture/Images/Image14.png';
import Image15 from './components/Picture/Images/Image15.png';
import Image16 from './components/Picture/Images/Image16.png';

const ChatRoomContainer = () => {
    const inputChatRef = useRef(null);
    // Chat State
    const [clientId, setClientId] = useState('김재모');
    const [chatMessage, setChatMessage] = useState('');
    const [chatInfo, setChatInfo] = useState({
        title: '김재모의 카피바라 청소',
        chatList: [
            {
                sender: '안김재모',
                content: `안녕하세요 김재모 입니다. 무엇을 도와드릴까요 ?`,
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
            {
                sender: '안김재모',
                content: `123123 김재모 입니다. 무엇을 도와드릴까요 ?`,
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

    // Picture State
    const [isShowSelectPicture, setIsShowSelectPicture] = useState(false);
    const [selectedPictures, setSelectedPictures] = useState([]);
    const [canSelectPictures, setCanSelectPictures] = useState([
        Image01, Image02, Image03, Image04,
        Image05, Image06, Image07, Image08,
        Image09, Image10, Image11, Image12,
        Image13, Image14, Image15, Image16,
    ])

    const searchChat = () => {

    }

    const sendChat = () => {
        const chatText = inputChatRef.current.value;
    }

    const toggleShowSelectPicture = () => {
        if (isShowSelectPicture) {
            setSelectedPictures([]);
        }
        setIsShowSelectPicture(!isShowSelectPicture);
    }

    const sendSelectPicture = () => {
        toggleShowSelectPicture();
        // 이미지 전송
    }

    const addSelectPicture = (picture) => {
        if (selectedPictures.indexOf(picture) != -1) {
            // 삭제
            setSelectedPictures(selectedPictures.filter(selectedPicture => picture !== selectedPicture));
            return;
        }
        
        if (selectedPictures.length >= 5) {
            return;
        }

        setSelectedPictures(prev => {
            return [...prev, picture];
        })
    }

    return (
        <ChatRoomPresenter
            clientId={clientId}

            chatInfo={chatInfo}
            chatMessage={chatMessage}
            setChatMessage={setChatMessage}

            isShowSelectPicture={isShowSelectPicture}
            toggleShowSelectPicture={toggleShowSelectPicture}
            sendSelectPicture={sendSelectPicture}

            canSelectPictures={canSelectPictures}
            selectedPictures={selectedPictures}
            addSelectPicture={addSelectPicture}

            searchChat={searchChat}

            inputChatRef={inputChatRef}
        />
    );
};

export default ChatRoomContainer;