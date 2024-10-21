import { Button, Content } from '../../../../../../components';
import './ServiceHistoryCard.css';
import formatDate from 'utils/dateUtils';
import { useNavigate } from 'react-router-dom';

const ServiceHistoryCard = ({
    request,
}) => {

    const navigate = useNavigate();

    const categoryLabels = {
        1: '이사/입주청소',        // MOVE
        2: '거주/생활청소',        // RESIDENCE
        3: '가전/가구청소',        // APPLIANCES
        4: '전문/특수청소',        // SPECIAL
        5: '사업장청소',           // WORKPLACE
        6: '건물관리',            // MANAGEMENT
    };

    let message, messageColor;

    switch (request.request_status) {
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
                <div className='service-history-card-top-wrap' onClick={() => navigate(`/servicehistorydetail/${request.request_clean_id}`)}>
                    <div className='service-history-card-top'>
                        <div className='service-history-card-company'>
                            <span className='large bold'>
                                {request.company.company_name}
                            </span>
                        </div>
                        <span className='small' style={{ color: messageColor }}>{message}</span>
                    </div>
                    <div className='service-history-card-bottom'>
                        <div className='service-history-card-date'>
                            <span className='large bold'>{formatDate(request.request_date)}</span>
                            <span className='small gray1'>{categoryLabels[request.category] || '존재하지 않는 서비스'}</span>
                        </div>
                        <span className='small gray2'>{request.clean_address}</span>
                        <span className='small gray2'>{request.clean_address_detail}</span>
                    </div>
                </div>
                <div className='service-history-card-button'>
                    {
                        request.is_write_review === 1 ? (
                            <Button
                                disabled={true}
                                title={'리뷰 작성 완료'}
                            />
                        ) : (
                            <Button
                                title={'리뷰 작성'}
                                onClick={() => navigate(`/writereview/${request.request_clean_id}`, {
                                    state: {
                                        request: request,
                                    },
                                })}
                            />
                        )
                    }
                </div>
            </Content>
        </div>
    );
};

export default ServiceHistoryCard;