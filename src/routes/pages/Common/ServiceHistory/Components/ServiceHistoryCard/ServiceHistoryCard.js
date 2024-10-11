import { useCustomContext } from 'context/CustomContext';
import { Button, Content } from '../../../../../../components';
import './ServiceHistoryCard.css';
import formatDate from 'utils/dateUtils';

const ServiceHistoryCard = ({
    data,
}) => {
    
    
    const { navigate } = useCustomContext();

    // 0: NONE
    // 1: WAITING
    // 2: CANCELED
    // 3: DONE
    // 4: CLEANING
    // 5: PAY_WAITING

    const categoryLabels = {
        'MOVE': '이사/입주청소',
        'APPLIANCES': '가전/가구청소',
        'WORKPLACE': '사업장청소',
        'MANAGEMENT': '건물 관리',
        'RESIDENCE': '가사도우미/생활청소',
        'SPECIAL': '전문/특수청소',
    };

    let message, messageColor;

    switch (data.request_clean_status) {
        case 'DONE':
            message = '완료';
            messageColor = 'var(--green-color)';
            break;
        case 'CLEANING':
            message = '진행중';
            messageColor = 'var(--primary-color)';
            break;
        case 'CANCELED':
            message = '취소됨';
            messageColor = 'var(--red-color)';
            break;
        case 'WAITING':
            message = '청소대기중';
            messageColor = 'var(--gray1-color)';
            break;
        case 'PAY_WAITING':
            message = '결제대기중';
            messageColor = 'var(--gray1-color)';
            break;
        default:
            message = '미처리';
    }

    return (
        <div className='service-history-card-wrap'>
            <Content
                border={'7px solid var(--divider-color)'}
            >
                <div className='service-history-card-top-wrap' onClick={() => navigate(`/servicehistorydetail/${data.request_clean_id}`)}>
                    <div className='service-history-card-top'>
                        <div className='service-history-card-company'>
                            <span className='large bold'>
                                {data.company_name}
                            </span>
                        </div>
                        <span className='small' style={{ color: messageColor }}>{message}</span>
                    </div>
                    <div className='service-history-card-bottom'>
                        <div className='service-history-card-date'>
                            <span className='large bold'>{formatDate(data.request_clean_date)}</span>
                            <span className='small gray1'>{categoryLabels[data.category] || '존재하지 않는 서비스'}</span>
                            {/* <span className='small gray1'>이사/입주 청소</span> */}
                        </div>
                        <span className='small gray2'>{data.clean_place}</span>
                        <span className='small gray2'>{data.clean_address}</span>
                        <span className='small gray2'>{data.clean_address_detail}</span>
                    </div>
                </div>
                <div className='service-history-card-button'>
                    {
                        data.is_write_review  ? (
                            <Button
                                disabled={true}
                                title={'리뷰 작성 완료'}
                            />
                        ) : (
                            <Button
                                title={'리뷰 작성'}
                                onClick={() => navigate('/writereview')}
                            />
                        )
                    }
                </div>
            </Content>
        </div>
    );
};

export default ServiceHistoryCard;