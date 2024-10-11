import { MainLayout, Top } from '../../../../components';
import CompanyInfo from './Components/CompanyInfo/CompanyInfo';
import CustomerInfo from './Components/CustomerInfo';
import PaymentInfo from './Components/PaymentInfo/PaymentInfo';
import ServiceDetailHeader from './Components/ServiceDetailHeader';
import ServiceInfo from './Components/ServiceInfo';
import './ServiceHistoryDetail.css';

const ServiceHistoryDetailPresenter = ({
    requestDetail,
}) => {
    return (
        <MainLayout>
            <Top
                title={'상세 내역'}
                notShowIcon={true}
            />
            <ServiceDetailHeader
                requestDetail={requestDetail}
            />
            <PaymentInfo
                requestDetail={requestDetail}
            />
            <ServiceInfo
                requestDetail={requestDetail}
            />
            <CompanyInfo
                requestDetail={requestDetail}
            />
            <CustomerInfo
                requestDetail={requestDetail}
            />
        </MainLayout>
    );
};

export default ServiceHistoryDetailPresenter;