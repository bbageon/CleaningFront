import { Content } from '../../../../../../components';
import '../Styles/ServiceHistoryDetailCard.css';
import formatDate from 'utils/dateUtils';
import formatTime from 'utils/timeUtils';

const ServiceInfo = ({
    requestDetail
}) => {

    const categoryLabels = {
        1: '이사/입주청소',        // MOVE
        2: '거주/생활청소',        // RESIDENCE
        3: '가전/가구청소',        // APPLIANCES
        4: '전문/특수청소',        // SPECIAL
        5: '사업장청소',           // WORKPLACE
        6: '건물관리',            // MANAGEMENT
    };

    const periodLabels = {
        'NONE': '없음',
        'EVERYWEEK': '매주',
        'BIWEEKLY': '격주',
        'MONTHLY': '매월',
        'ONCE': '이번 한번만',
    }

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
                        <p>{periodLabels[requestDetail.request_period]}</p>
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
                        <p>{formatTime(requestDetail.start_clean_date)} ~ {formatTime(requestDetail.end_clean_date)}</p>
                    </div>
                </div>

            </Content>
        </div>
    );
};

export default ServiceInfo;