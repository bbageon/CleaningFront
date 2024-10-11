import { Button, Content } from '../../../../../../components';
import '../Styles/ServiceHistoryDetailCard.css';
import formatPhone from 'utils/phoneUtils';

const CompanyInfo = ({
    requestDetail,
}) => {

    return (
        <div className='service-history-detail-card-wrap'>
            <Content>
                <div className='service-history-detail-card-title'>
                    <span>업체 정보</span>
                </div>
                <div className='service-history-detail-card-info'>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>업체명</p>
                        <p>{requestDetail.company_name}</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>주소</p>
                        <div className='service-history-detail-card-address'>
                            <p>{requestDetail.company_address}</p>
                            <p>{requestDetail.company_address_detail}</p>
                        </div>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>전화번호</p>
                        <p>{formatPhone(requestDetail.company_phone)}</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>대표자명</p>
                        <p>{requestDetail.ceo_name}</p>
                    </div>
                </div>

                <Button
                    wrapPadding={'1rem 0 0 0'}
                    title={'대화방으로 이동'}
                />
            </Content>
        </div>
    );
};

export default CompanyInfo;