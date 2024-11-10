import { Content } from '../../../../../../components';
import '../Styles/ServiceHistoryDetailCard.css';
import formatPrice from 'utils/priceUtils';

const PaymentInfo = ({
    requestDetail,
}) => {

    return (
        <div className='service-history-detail-card-wrap'>
            <Content>
                <div className='service-history-detail-card-title'>
                    <span>결제 정보</span>
                </div>
                <div className='service-history-detail-card-sub-title'>
                    <span>견적서금액 정보 (VAT 포함)</span>
                </div>
                <div className='service-history-detail-card-info'>
                    <div className='service-history-detail-card-between'>
                        <span>결제금액</span>
                        {
                            requestDetail.request_status === 'CANCELED' ? (
                                // <span className='strike-through-text'>{formatPrice(requestDetail.total_price)}{requestDetail.unit}</span>
                                <span className='strike-through-text'>{formatPrice(requestDetail.total_price)} 원</span>
                            ) : (
                                // <span>{formatPrice(requestDetail.total_price)}{requestDetail.unit}</span>
                                <span>{formatPrice(requestDetail.total_price)} 원</span>
                            )
                        }
                    </div>
                    {
                        requestDetail.request_status === 'PAY_WAITING' ? (
                            <span className='gray1 end'>결제하기 ⟩</span>
                        ) : (
                            <div className='service-history-detail-card-payment'>
                                {
                                    requestDetail.request_status === 'NONE' ? (
                                        <></>
                                    ) : (
                                        <>
                                            <div className='service-history-detail-card-between small'>
                                                <span className='gray2'>결제수단</span>
                                                <span>신용카드</span>
                                            </div>
                                            {/* <div className='service-history-detail-card-between small'>
                                                {
                                                    requestDetail.request_status === 'CANCELED' ? (
                                                        <span className='gray2'>취소일자</span>
                                                    ) : (
                                                        <span className='gray2'>결제일자</span>
                                                    )
                                                }
                                                <span>2024. 08. 20. (화)</span>
                                            </div> */}
                                        </>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </Content>
        </div>
    );
};

export default PaymentInfo;