import './ServiceDetailHeader.css';
import { Content } from '../../../../../../components';

const ServiceDetailHeader = ({
    status = 'completed'
}) => {

    /* ===== STATUS 관리 ===== */
    let message, messageColor;

    switch (status) {
        case 'completed':
            message = '완료';
            messageColor = 'var(--green-color)';
            break;
        case 'cancelled':
            message = '취소';
            messageColor = 'var(--red-color)';
            break;
        case 'pending':
            message = '대기중';
            messageColor = 'var(--gray1-color)';
            break;
        default:
            message = '';
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
                        status == 'pending' ? (
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