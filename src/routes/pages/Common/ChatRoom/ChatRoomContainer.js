import { useRef, useState, useEffect } from "react";
import { useFetcher, useLocation, useParams } from "react-router-dom";
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
    const { chat_room_id } = state;
    const { room_id } = useParams();

    // Chat State
    const [sender, setSender] = useState('홍길동');
    const [receiver, setReceiver] = useState('고길동');
    const [clientId, setClientId] = useState('홍길동');
    const [chatMessage, setChatMessage] = useState('');
    const [chatTitle, setChatTitle] = useState('김재모의 카피바라 청소');
    const [chatList, setChatList] = useState([]);

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
                        console.log(process.env.REACT_APP_CHAT_SERVER)
                        const userName = cookie.getCookie('name');
                        console.log(userName)
                        if (!userName) setClientId('홍길동');
                        else setClientId(userName);
                        // setClientId('홍길동')

                        const chatInfo = await API.getOneChatRoom(room_id);
                        if (chatInfo.status !== 200) throw new Error(`[ChatRoomContainer][getOneChatRoom] Error`);

                        // chatInfo.
                        console.log(chatInfo);
                        const { data } = chatInfo;
                        console.log(data.user.name);
                        console.log(data.company.company_name);
                        setChatTitle(data.chat_room_name);
                        setSender(data.user.name);
                        setReceiver(data.company.company_name);

                        const chatMessageInfo = await API.getOneChatMessage(room_id);
                        if (chatMessageInfo.status !== 200) throw new Error(`[ChatRoomContainer][getOneChatMessage] Error`);
                        setChatList(chatMessageInfo.data.room_messages);

                    } catch (e) {

                    }
                }
            )()


            if (!socketRef.current) {
                socketRef.current = io(`${process.env.REACT_APP_CHAT_SERVER}/cleaning_chat`, {
                    transports: ['websocket'],
                    reconnectionAttempts: 3,
                });
            }

            socketRef.current?.on('chatMessage', (messageInfo) => {
                // 현재 채팅방이 아닌 다른 채팅방에서 수신한 메시지는 거른다
                if (messageInfo.chat_room_id !== chat_room_id) return;

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

        }
    }, []);

    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [chatList]);


    const searchChat = () => {

    }

    const sendChat = () => {
        if (chatMessage.length === 0) return;

        socketRef.current.emit('chatMessage', {
            room_id,
            chat_room_id,
            message: chatMessage,
            sender,
            receiver,
        });
        inputChatRef.current.focus();
        setChatMessage('');
    }

    // 이미지 선택(input)
    const MAX_IMAGE_SIZE = 5;
    const selectMultiPictures = async (e) => {
        try {
            const files = Array.from(e.target.files);

            files.map((file, idx) => {
                if (idx >= MAX_IMAGE_SIZE) return;

                setSelectedPictures(prev => {
                    return [
                        ...prev,
                        file
                    ];
                });
            })
            toggleShowSelectPicture();
        } catch (e) {
            console.error(e);
        }
    }

    const toggleShowSelectPicture = () => {
        if (isShowSelectPicture) {
            setSelectedPictures([]);
        }
        setIsShowSelectPicture(!isShowSelectPicture);
    }

    // 이미지 전송
    const sendSelectPicture = async () => {
        toggleShowSelectPicture();
        console.log(selectedPictures)
        
        const formData = new FormData();
        selectedPictures?.map(picture => {
            formData.append('files', picture);
        })

        try {
            const result = await API.postImagesTest(formData);

            console.log(result);
            if (result.status !== 200) {
                throw new Error(`invalid upload images`);
            }

            // 이미지가 전달된 경우 ,로 이미지를 구분한 후 이미지를 뜻하는 <! !> 를 앞 뒤로 붙여준다
            const imageUrl = "<!" + result.data.join(',') + "!>";

            socketRef.current.emit('chatMessage', {
                room_id,
                chat_room_id,
                message: imageUrl,
                sender,
                receiver,
            });
            setSelectedPictures([]);
        } catch (e) {
            console.error(e);
        }
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
            selectMultiPictures={selectMultiPictures}

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