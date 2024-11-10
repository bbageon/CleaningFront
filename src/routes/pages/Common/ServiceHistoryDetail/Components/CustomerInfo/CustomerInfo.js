import formatPhone from 'utils/phoneUtils';
import { Content } from '../../../../../../components';
import '../Styles/ServiceHistoryDetailCard.css';

const CustomerInfo = ({
    requestDetail,
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
                        <p>{requestDetail.user.name}</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>주소</p>
                        <div className='service-history-detail-card-address'>
                            <p>{requestDetail.clean_address}</p>
                            <p>{requestDetail.clean_address_detail}</p>
                        </div>
                    </div>
                    {/* <div className='service-history-detail-card-between'>
                        <p className='gray2'>전화번호</p>
                        <p>{formatPhone(requestDetail.user.phone)}</p>
                    </div> */}
                </div>

            </Content>
        </div>
    );
};

export default CustomerInfo;