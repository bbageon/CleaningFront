import { Content } from '../../../../../../components';
import '../Styles/ServiceHistoryDetailCard.css';

const CustomerInfo = ({

}) => {
    return (
        <div className='service-history-detail-card-wrap'>
            <Content>
                <div className='service-history-detail-card-title'>
                    <span>고객 정보</span>
                </div>
                <div className='service-history-detail-card-info'>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>이름</p>
                        <p>허관</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>주소</p>
                        <div className='service-history-detail-card-address'>
                            <p>부산광역시 사상구 주례로 47</p>
                            <p>글로벌빌리지 서관 1234호</p>
                        </div>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>전화번호</p>
                        <p>010-1234-5678</p>
                    </div>
                </div>

            </Content>
        </div>
    );
};

export default CustomerInfo;