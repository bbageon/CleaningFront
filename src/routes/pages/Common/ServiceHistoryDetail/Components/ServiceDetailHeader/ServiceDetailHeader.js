import './ServiceDetailHeader.css';
import { Content } from '../../../../../../components';

const ServiceDetailHeader = ({
    requestDetail,
}) => {

    let message, messageColor;

    switch (requestDetail?.request_status) {
        case 'DONE':
            message = '완료';
            messageColor = 'var(--green-color)';
            break;
        case 'CLEANING':
            message = '진행중';
            messageColor = 'var(--primary-color)';
            break;
        case 'CANCELED':
            message = '취소';
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
        <div className='service-history-detail-card-wrap'>
            <Content
                paddingTop={75}
                paddingBottom={75}
            >
                <div className='large'>
                    <span style={{ color: messageColor }}>{message}</span>
                    {
                        requestDetail?.request_status === 'WAITING' || requestDetail?.request_status === 'PAY_WAITING' || requestDetail?.request_status === 'CLEANING' ? (
                            <span>인 요청입니다.</span>
                        ) : (
                            <span>된 요청입니다.</span>
                        )
                    }
                </div>
            </Content>
        </div>
    );
};

export default ServiceDetailHeader;