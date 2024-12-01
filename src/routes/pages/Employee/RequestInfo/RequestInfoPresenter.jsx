import { useState } from 'react';
import './RequestInfo.css';
import { EmployeeMainLayout } from 'components/Layouts';
// 테스트용 이미지
import Test from './Test.svg';

const RequestInfoPresenter = ({

}) => {
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    const comment = "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"

    // 요청 요일
    const [RequestDays, setRequestDays] = useState(["월", "목"]);

    return (
        <EmployeeMainLayout
            footer={true}

            isShowTop={true}
            title={'상세 내역'}
            notShowIcon={true}
        >
            <div className='request-info-container'>
                <span style={{ fontSize: '1.4rem' }}>
                    김건우
                    <span style={{ margin: '0 2px' }}>{/* 공백 */}</span>
                    <span style={{ fontSize: '1.1rem' }}>고객님</span>
                </span>
                <div className='request-info-form'>
                    <span className='request-info-title'>요청 시간</span>
                    <span className='request-info-content'>2023.11.29 14:25</span>
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
                                <span>2023.11.30</span>
                            </div>
                        </div>
                        <div className='request-date-container'>
                            <span style={{ fontSize: '1.1rem' }}>종료</span>
                            <div className='request-date-form'>
                                2023.11.30
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
                        <span>오전</span>
                        <span style={{ margin: '0 2px' }}>{/* 공백 */}</span>
                        <span style={{fontSize : '1.4rem'}}>11:00</span>
                    </div>
                </div>

                {/* 주소 */}
                <div className='request-info-form'>
                    <span className='request-info-title'>주소</span>
                    <span className='request-info-content' style={{fontSize : '1.1rem', fontWeight : '400'}}>부산광역시 사상구 주례로 47(동서대학교), 글로벌 빌리지 서관 1219호</span>
                </div>

                {/* 서비스 유형 */}
                <div className='request-info-form'>
                    <span className='request-info-title'>서비스 유형</span>
                    <span className='request-info-content' style={{fontSize : '1.1rem', fontWeight : '400'}}>화장실 청소</span>
                </div>

                {/* 요청 사항 */}
                <div className='request-info-form'>
                    <span className='request-info-title'>요청 사항</span>
                    <span className='request-info-content' style={{fontSize : '1.1rem', fontWeight : '400'}}>{`${comment.length > 0 ? comment : "없음"}`}</span>
                </div>

                <div className='request-image-container'>
                    <img src={Test} className='image-wrap'/>
                    <img src={Test} className='image-wrap'/>
                    <img src={Test} className='image-wrap'/>
                    <img src={Test} className='image-wrap'/>
                    <img src={Test} className='image-wrap'/>
                </div>

                {/* 구분선 */}
                <div className="main-divider"></div>

                
            </div>


        </EmployeeMainLayout>
    );
};

export default RequestInfoPresenter;