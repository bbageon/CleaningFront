import { Button, Content } from '../../../../../../components';
import '../Styles/ServiceHistoryDetailCard.css';

const CompanyInfo = ({

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
                        <p>김재모의 카피바라 청소</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>주소</p>
                        <div className='service-history-detail-card-address'>
                            <p>부산광역시 남포동</p>
                            <p>3층</p>
                        </div>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>전화번호</p>
                        <p>051-123-4567</p>
                    </div>
                    <div className='service-history-detail-card-between'>
                        <p className='gray2'>대표자명</p>
                        <p>김재모</p>
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