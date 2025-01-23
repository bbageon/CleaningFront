import { useEffect, useState } from 'react';
import './RequestInfo.css';
import { EmployeeMainLayout } from 'components/Layouts';
// 테스트용 이미지
import Test from './Test.svg';
import Check from './check.svg';
import { Navigate, useNavigate } from 'react-router-dom';
import { createStringLiteral } from 'typescript';

const RequestInfoPresenter = ({
    isLoading,
    data,
}) => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();

    const List = data?.request_clean;

    const TotalPrice = List?.total_price.toLocaleString();
    const ServiceCategory = ['이사/입주 청소', '생활/거주 청소', '가전/가구 청소', '전문/특수 청소', '사업장 청소', '건물 관리'];

    const RequestDates = new Date(List?.request_date * 1000);
    const StartDates = new Date(List?.start_clean_date * 1000);
    const endDate = new Date(List?.expect_end_clean_date * 1000);

    const formatDate = (date) => {
        return date.toLocaleDateString("ko-KR", {
            year: "numeric", // 연도 (4자리)
            month: "2-digit", // 월 (2자리)
            day: "2-digit", // 일 (2자리)
        })
        .replace(/. /g, '.') // 구분자 수정
        .replace(/\.$/, ""); 
    };

    const formatTime = (Times) => {
        const Hours = Times.getHours();
        const Minutues = Times.getMinutes();
        const period = Hours >= 12 ? "오후" : "오전";
        const Time =  `${Hours.toString().padStart(2, '0')}:${Minutues.toString().padStart(2, '0')}`;
        return {Time, period};
    }

    const formatDateTime = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
    
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
    
        return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;
    };
    
    
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    const [RequestDays, setRequestDays] = useState([]);

    /* ===== RENDER ===== */
    useEffect(() => {
        const result = days.filter((day, index) => List?.request_clean_period_day[index] === '1');
        setRequestDays(result);
    }, [data]);

    // if (List == null) {
    //     alert("비정상적인 접근입니다");
    //     navigate('/employee');
    //     return ;
    // }

    if (isLoading) {
        return null;
    }
    return (
        <EmployeeMainLayout
            footer={true}

            isShowTop={true}
            title={'상세 내역'}
            notShowIcon={true}
        >
            <div className='request-info-container'>
                <span style={{ fontSize: '1.5rem' }}>
                    {List?.user_name}
                    <span style={{ margin: '0 2px' }}>{/* 공백 */}</span>
                    <span style={{ fontSize: '1.2rem' }}>고객님</span>
                </span>
                <div className='request-info-form'>
                    <span className='request-info-title'>요청 시간</span>
                    <span className='request-info-content'>{formatDateTime(RequestDates)}</span>
                </div>

                {/* 구분선 */}
                <div className="main-divider"></div>

                {/* 날짜 */}
                <div className='request-info-form'>
                    <span className='request-info-title'>날짜</span>
                    <div className='request-info-date'>
                        <div className='request-date-container'>
                            <span style={{ fontSize: '1.1rem' }}>시작</span>
                            <div className='request-date-form'>
                                <span>{formatDate(StartDates)}</span>
                            </div>
                        </div>
                        <div className='request-date-container'>
                            <span style={{ fontSize: '1.1rem' }}>종료</span>
                            <div className='request-date-form'>
                                {formatDate(endDate)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 요일 */}
                <div className='request-info-form'>
                    <span className='request-info-title'>요일</span>
                    <div className='request-day-container'>
                        {days.map((day, idx) => (
                            <div key={day} className={`${RequestDays.includes(day) ? 'request-day-form-include' : 'request-day-form'}`}>
                                {day}
                            </div>
                        ))}
                    </div>
                </div>


                {/* 시간 */}
                <div className='request-info-form'>
                    <span className='request-info-title'>시간</span>
                    <div className='request-time-container'>
                        <span>{formatTime(StartDates).period}</span>
                        <span style={{ margin: '0 2px' }}>{/* 공백 */}</span>
                        <span style={{ fontSize: '1.4rem' }}>{formatTime(StartDates).Time}</span>
                    </div>
                </div>

                {/* 주소 */}
                <div className='request-info-form'>
                    <span className='request-info-title'>주소</span>
                    <span className='request-info-content' style={{ fontSize: '1.1rem', fontWeight: '400' }}>{List?.clean_address}, {List?.clean_address_detail}</span>
                </div>

                {/* 서비스 유형 */}
                <div className='request-info-form'>
                    <span className='request-info-title'>서비스 유형</span>
                    <span className='request-info-content' style={{ fontSize: '1.1rem', fontWeight: '400' }}>{ServiceCategory[List?.category]}</span>
                </div>

                {/* 요청 사항 */}
                <div className='request-info-form'>
                    <span className='request-info-title'>요청 사항</span>
                    <span className='request-info-content' style={{ fontSize: '1.1rem', fontWeight: '400' }}>{`${List?.requirements ? List?.requirements : "없음"}`}</span>
                </div>

                {/* 이미지 */}
                <div className='request-image-container'>
                    <img src={Test} className='image-wrap' />
                    <img src={Test} className='image-wrap' />
                    <img src={Test} className='image-wrap' />
                    <img src={Test} className='image-wrap' />
                    <img src={Test} className='image-wrap' />
                    <img src={Test} className='image-wrap' />
                </div>

                {/* 구분선 */}
                <div className="main-divider"></div>

                {/* 추가옵션 */}
                {/* <span className='request-info-title' style={{ fontSize: '1.3rem' }}>추가 옵션</span>

                <div className='request-optional-container'>

                    <div className='request-optional-form'>
                        <div className='request-optional-checkbox'>
                            <img src={Check} />
                        </div>
                        <span>asd</span>
                        <span>(+{TotalPrice})</span>
                    </div>

                    <div className='request-optional-form'>
                        <div className='request-optional-checkbox'>
                            <img src={Check} />
                        </div>
                        <span>asd</span>
                        <span>(+{TotalPrice})</span>
                    </div>

                    <div className='request-optional-form'>
                        <div className='request-optional-checkbox'>
                            <img src={Check} />
                        </div>
                        <span>asd</span>
                        <span>(+{TotalPrice})</span>
                    </div>

                </div> */}

                {/* 구분선 */}
                {/* <div className="main-divider"></div> */}

                {/* 요청 버튼 */}
                <div className='request-info-form'>
                    <div className='request-total-price'>
                        <span>Total : {TotalPrice}원</span>
                    </div>
                    <div className='request-complete-button'
                        onClick={() => navigate('/employee')}
                    >
                        <span>청소 완료</span>
                    </div>
                </div>


            </div>


        </EmployeeMainLayout>
    );
};

export default RequestInfoPresenter;