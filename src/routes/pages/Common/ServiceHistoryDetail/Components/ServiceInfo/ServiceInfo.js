import { Content } from '../../../../../../components';
import '../Styles/ServiceHistoryDetailCard.css';

const ServiceInfo = ({

}) => {
    return (
        <div className='service-history-detail-card-wrap'>
            <Content>
                <div className='service-history-detail-card-title'>
                    <span>선택 서비스 정보</span>
                </div>
                <div className='service-history-detail-card-info'>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>서비스 종류</p>
                        <p>이사/거주 청소</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>주기</p>
                        <p>매주</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>요일</p>
                        <p>금요일</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>날짜</p>
                        <p>2024. 08. 23. (금)</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>시작 시간</p>
                        <p>17:30 ~ 19:30</p>
                    </div>
                </div>

            </Content>
        </div>
    );
};

export default ServiceInfo;