import { useNavigate } from 'react-router-dom';
import { Button, Content } from '../../../../../../components';
import './ServiceHistoryCard.css';

const ServiceHistoryCard = ({
    data,
}) => {

    /* ===== NAVIGATE ===== */
    const navigate = useNavigate();

    return (
        <div className='service-history-card-wrap' onClick={() => {navigate('/servicehistorydetail')}}>
            <Content
                border={'7px solid var(--divider-color)'}
                onClick={() => {navigate('/servicehistorydetail')}}
            >
                <div className='service-history-card-top'>
                    <div className='service-history-card-company'>
                        <span className='large bold'>
                            {data.company}
                        </span>
                    </div>
                    {
                        data.status === 1 ? (
                            <span className='small green'>
                                완료됨
                            </span>

                        ) : (
                            data.status === 2 ? (
                                <span className='small red'>
                                    취소됨
                                </span>
                            ) : (
                                <span className='small gray2'>
                                    대기중
                                </span>
                            )
                        )
                    }
                </div>
                <div className='service-history-card-bottom'>
                    <div className='service-history-card-date'>
                        <span className='large bold'>{data.date}</span>
                        <span className='small gray1'>이사/입주 청소</span>
                    </div>
                    <span className='small gray2'>부산광역시 사상구 주례로 47</span>
                    <span className='small gray2'>글로벌리지 서관 1910호</span>
                </div>
                <div className='service-history-card-button'>
                    {
                        data.isReview ? (
                            <Button
                                disabled={true}
                                title={'리뷰 작성 완료'}
                            />
                        ) : (
                            <Button
                                title={'리뷰 작성'}
                            />
                        )
                    }
                </div>
            </Content>
        </div>
    );
};

export default ServiceHistoryCard;