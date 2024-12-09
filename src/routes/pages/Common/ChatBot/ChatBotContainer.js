import { useEffect, useState } from "react";
import ChatBotPresenter from "./ChatBotPresenter";
import { ServiceCategory } from "enum";
import { useAuthStore, useModalStore } from "store";
import { Modal } from "components";
import { useCreateRequestEstimate } from "hooks/RequestEstimateHooks";
import { API } from "api";
import { useNavigate } from "react-router-dom";

const ChatBotContainer = () => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();



    /* ===== STATE ===== */
    // 선택한 결정을 저장하는 state
    const [decide, setDecide] = useState([]);
    // 질문을 저장하는 state
    const [questionList, setQuestionList] = useState([
        {
            title: '어떤 서비스를 희망하시나요?',
            category: 'cleaning',
            option: [
                { option_title: '이사/입주 청소', value: ServiceCategory.MOVE, },
                { option_title: '사업장 청소', value: ServiceCategory.WORKPLACE, },
                { option_title: '생활/거주 청소', value: ServiceCategory.RESIDENCE, },
                { option_title: '가전/가구 청소', value: ServiceCategory.APPLIANCES, },
            ],
            event: (title, value, category, index) => {
                choiceQuestion(title, value, category, index);
            },
            enabled: true,
        },
        {
            title: '시작 시간은 언제가 좋으신가요?',
            category: 'start_time',
            option: [
                { option_title: '오전 7시 ~ 정오', value: '07:00~12:00', },
                { option_title: '오전 8시 ~ 정오', value: '08:00~12:00', },
                { option_title: '오전 9시 ~ 정오', value: '09:00~12:00', },
            ],
            event: (title, value, category, index) => {
                choiceQuestion(title, value, category, index);
            },
            enabled: true,
        },
        {
            title: '날짜는 언제가 좋으신가요?',
            category: 'date',
            option: [
                { option_title: '날짜 선택하기', value: '날짜 선택하기', },
            ],
            event: (title, value, category, index) => {
                showSelectDateModal();
                // choiceQuestion(title, value, category, index);
            },
            enabled: true,
        },
    ])
    // 화면에 띄워주는 채팅을 저장하는 state
    const [chatList, setChatList] = useState([

    ])
    // 현재 질문의 순서 인덱스를 저장하는 state
    const [showQuestionCount, setShowQuestionCount] = useState(0);



    /* ===== STORE =====  */
    const userId = useAuthStore(state => state.user_id);
    const { isModalOpen, content, openModal, closeModal } = useModalStore(state => state);



    /* ===== MUTATE ===== */
    // 견적서 요청
    const { mutate: requestEstimate } = useCreateRequestEstimate(
        async (data) => {
            // const result = await API.postRequestEstimate({
            //     ...data,
            // });
            openModal('견적서 요청', '견적서 요청 중입니다...', null, 'loading');

            setTimeout(() => {
                navigate('/paymentsuccess');
                closeModal();
            }, 2000);
        },
        (error) => {
            console.error(error);
        }
    );



    useEffect(() => {
        // 만약 질문이 없다면 견적서 생성 여부를 질문한 뒤 
        // 생성 버튼을 누르면 견적서 요청을 생성한다
        if (!questionList[showQuestionCount]) {
            openModal('견적서 요청', '견적서 요청을 하시겠습니까?', () => {
                requestEstimate({
                    user_id: userId,
                    request_date: Math.floor(new Date(selectedDate) / 1000),
                    category: decide[0].value,
                    requirements: decide[1].value,
                })
            }, 'double');
            return;
        }

        // 채팅 목록에 질문을 하나 추가한다
        setChatList(prev => {
            return [
                ...prev,
                {
                    ...questionList[showQuestionCount],
                    type: 'question',
                }
            ]
        })
    }, [showQuestionCount]);

    // 질문 선택
    const choiceQuestion = (title, answer, category, index) => {
        // 채팅 목록에 답변이 하나 추가된다
        setChatList(prev => {
            return [
                ...prev,
                {
                    value: title,
                    type: 'answer',
                }
            ]
        })

        // 선택한 값을 저장한다
        setDecide(prev => {
            return [
                ...prev,
                {
                    category,
                    value: answer.value,
                }
            ]
        })

        // 이전 문제를 선택하지 못하게 막는다
        blockPrevQuestion(index);
        // 질문 순서 인덱스를 1 증가시킨다
        setShowQuestionCount(prev => prev + 1);
    }

    // 이전 문제를 선택하지 못하게 막는다
    const blockPrevQuestion = (index) => {
        setChatList(prev => {
            return prev.map((chat, idx) =>
                idx === index && chat.type === 'question'
                    ? { ...chat, enabled: false } : chat)
        })
    }


    /*======모달 관련======*/
    const [showSelectDate, setShowSelectDate] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // 요일 배열
    const days = ['일', '월', '화', '수', '목', '금', '토'];

    // 날짜 선택
    const onSelectDate = (date) => {
        console.log(typeof date)
        // 선택한 날짜 저징
        setSelectedDate(date)

        // 모달 끄기
        showSelectDateModal();

        // 채팅 목록에 답변이 하나 추가된다
        setChatList(prev => {
            return [
                ...prev,
                {
                    value: `${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}요일`,
                    type: 'answer',
                }
            ]
        })

        // 답변 넘어가기
        blockPrevQuestion(showQuestionCount);
        setShowQuestionCount(prev => prev + 1);
    }

    // 모달 띄우기
    const showSelectDateModal = () => {
        setShowSelectDate(!showSelectDate);
    }

    return (
        <>
            <ChatBotPresenter
                chatList={chatList}

                showSelectDate={showSelectDate}
                showSelectDateModal={showSelectDateModal}

                onSelectDate={onSelectDate}
                selectedDate={selectedDate}
            />
            {
                isModalOpen && (
                    <Modal
                        isOpen={isModalOpen}
                        title={content.title}
                        content={content.message}
                    />
                )
            }
        </>
    );
};

export default ChatBotContainer;