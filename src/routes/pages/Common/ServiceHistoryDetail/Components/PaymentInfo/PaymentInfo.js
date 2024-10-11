import { Content } from '../../../../../../components';
import '../Styles/ServiceHistoryDetailCard.css';
import formatPrice from 'utils/priceUtils';

const PaymentInfo = ({
    requestDetail,
}) => {

    // 0: NONE
    // 1: WAITING
    // 2: CANCELED
    // 3: DONE
    // 4: CLEANING
    // 5: PAY_WAITING

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
                            requestDetail.request_clean_status === 'CANCELED' ? (
                                <span className='strike-through-text'>{formatPrice(requestDetail.price)}{requestDetail.unit}</span>
                            ) : (
                                <span>{formatPrice(requestDetail.price)}{requestDetail.unit}</span>
                            )
                        }
                    </div>
                    {
                        requestDetail.request_clean_status === 'PAY_WAITING' ? (
                            <span className='gray1 end'>결제하기 ⟩</span>
                        ) : (
                            <div className='service-history-detail-card-payment'>
                                {
                                    requestDetail.request_clean_status === 'NONE' ? (
                                        <></>
                                    ) : (
                                        <>
                                            <div className='service-history-detail-card-between small'>
                                                <span className='gray2'>결제수단</span>
                                                <span>신용카드</span>
                                            </div>
                                            <div className='service-history-detail-card-between small'>
                                                {
                                                    requestDetail.request_clean_status === 'CANCELED' ? (
                                                        <span className='gray2'>취소일자</span>
                                                    ) : (
                                                        <span className='gray2'>결제일자</span>
                                                    )
                                                }
                                                <span>2024. 08. 20. (화)</span>
                                            </div>
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