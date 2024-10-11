import { Content } from '../../../../../../components';
import '../Styles/ServiceHistoryDetailCard.css';
import formatDate from 'utils/dateUtils';
import formatTime from 'utils/timeUtils';

const ServiceInfo = ({
    requestDetail
}) => {

    // 1: MOVE
    // 2: APPLIANCES
    // 3: WORKPLACE
    // 4: MANAGEMENT
    // 5: RESIDENCE
    // 6: SPECIAL

    const categoryLabels = {
        'MOVE': '이사/입주청소',
        'APPLIANCES': '가전/가구청소',
        'WORKPLACE': '사업장청소',
        'MANAGEMENT': '건물 관리',
        'RESIDENCE': '가사도우미/생활청소',
        'SPECIAL': '전문/특수청소',
    };

    return (
        <div className='service-history-detail-card-wrap'>
            <Content>
                <div className='service-history-detail-card-title'>
                    <span>선택 서비스 정보</span>
                </div>
                <div className='service-history-detail-card-info'>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>서비스 종류</p>
                        <p>{categoryLabels[requestDetail.category] || '알 수 없는 서비스'}</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>주기</p>
                        <p>매주</p>
                    </div>
                    {/* <div className='service-history-detail-card-between'>
                        <p className='gray2'>요일</p>
                        <p>금요일</p>
                    </div> */}
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>시작 날짜</p>
                        <p>{formatDate(requestDetail.start_clean_date)}</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>시작 시간</p>
                        <p>{formatTime(requestDetail.request_time)} ~ {formatTime(requestDetail.request_end_time)}</p>
                    </div>
                </div>

            </Content>
        </div>
    );
};

export default ServiceInfo;