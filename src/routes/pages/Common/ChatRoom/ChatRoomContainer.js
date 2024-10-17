import { useRef, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
import API from '../../../../api/API';
import { cookie } from "util";
import { io } from "socket.io-client";

const ChatRoomContainer = ({
    socketRef,
}) => {
    const inputChatRef = useRef(null);
    const chatRef = useRef(null);
    const { state } = useLocation();
    const { room_id } = useParams();

    // Chat State
    const [sender, setSender] = useState('홍길동');
    const [receiver, setReceiver] = useState('테스트');
    const [clientId, setClientId] = useState('홍길동');
    const [chatMessage, setChatMessage] = useState('');
    const [chatTitle, setChatTitle] = useState('김재모의 카피바라 청소');
    const [chatList, setChatList] = useState([
        // {
        //     sender: '안김재모',
        //     receiver: '받는사람',
        //     message: `안녕하세요 김재모 입니다. 무엇을 도와드릴까요 ?`,
        // },
    ])

    // Picture State
    const [isShowSelectPicture, setIsShowSelectPicture] = useState(false);
    const [selectedPictures, setSelectedPictures] = useState([]);
    const [canSelectPictures, setCanSelectPictures] = useState([
        Image01, Image02, Image03, Image04,
        Image05, Image06, Image07, Image08,
        Image09, Image10, Image11, Image12,
        Image13, Image14, Image15, Image16,
    ])


    useEffect(() => {
        try {
            (
                async () => {
                    try {
                        const userName = cookie.getCookie('name');
                        if (!userName) setClientId('홍길동');
                        else setClientId(userName);

                        const chatInfo = await API.getOneChatRoom(room_id);
                        if (chatInfo.status !== 200) throw new Error(`[ChatRoomContainer][getOneChatRoom] Error`);

                        // chatInfo.
                        console.log(chatInfo);
                        const userType = cookie.getCookie('userType');
                        if (userType === 'USER') {
                            setSender(chatInfo.data.user.name);
                            setReceiver('홍길동');
                            // setReceiver(chatInfo.data.company.name);
                        } else {
                            // setSender(chatInfo.data.company.name);
                            setSender('홍길동');
                            setReceiver(chatInfo.data.user.name);
                        }

                        const chatMessageInfo = await API.getOneChatMessage(room_id);
                        if (chatMessageInfo.status !== 200) throw new Error(`[ChatRoomContainer][getOneChatMessage] Error`);
                        setChatList(chatMessageInfo.data.room_messages);
                        console.log(chatMessageInfo.data)
                    } catch (e) {
                        console.log(e.message);
                    }
                }
            )()
            console.log(state);

            if (!socketRef.current) {
                socketRef.current = io('ws://localhost:4200/cleaning_chat', {
                    transports: ['websocket'],
                    reconnectionAttempts: 3,
                });
            }

            socketRef.current?.on('chatMessage', (messageInfo) => {
                console.log(messageInfo);
                console.log(messageInfo.message);
                setChatList(prev => {
                    return [
                        ...prev,
                        {
                            sender: messageInfo.sender,
                            receiver: messageInfo.receiver,
                            message: messageInfo.message,
                        }
                    ]
                });
            });
        } catch (e) {
            console.log(e)
        }
    }, []);

    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [chatList]);


    const searchChat = () => {

    }

    const sendChat = () => {
        if (chatMessage.length === 0) return;

        // const chatText = inputChatRef.current.value;
        // console.log(chat_room_id);
        socketRef.current.emit('chatMessage', {
            room_id,
            chat_room_id: state.chat_room_id,
            message: chatMessage,
            sender,
            receiver,
        });
        inputChatRef.current.focus();
        setChatMessage('');
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
            chatRef={chatRef}

            chatTitle={chatTitle}
            chatList={chatList}
            chatMessage={chatMessage}
            setChatMessage={setChatMessage}

            isShowSelectPicture={isShowSelectPicture}
            toggleShowSelectPicture={toggleShowSelectPicture}
            sendSelectPicture={sendSelectPicture}

            canSelectPictures={canSelectPictures}
            selectedPictures={selectedPictures}
            addSelectPicture={addSelectPicture}

            searchChat={searchChat}
            sendChat={sendChat}

            inputChatRef={inputChatRef}
        />
    );
};

export default ChatRoomContainer;