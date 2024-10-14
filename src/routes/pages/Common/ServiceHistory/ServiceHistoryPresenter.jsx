import { MainLayout, Tab, Top } from '../../../../components';
import ServiceHistoryList from './Components/ServiceHistoryList';
import './ServiceHistory.css';

const ServiceHistoryPresenter = ({
    isLoading,
    requestCleans
}) => {

    if (isLoading) {
        <></>
    };

    console.log(requestCleans)

    const TabItems = [
        {
            label: '전체',
            key: 'all',
            children:
                <ServiceHistoryList
                    requestCleans={requestCleans}
                />
        },
        {
            label: '이사/입주 청소',
            key: 'MOVE',
            children:
                <ServiceHistoryList

                />
        },
        {
            label: '거주/생활 청소',
            key: 'APPLIANCES',
            children:
                <ServiceHistoryList

                />
        },
        {
            label: '가전/가구 청소',
            key: '',
            children:
                <ServiceHistoryList

                />
        },
        {
            label: '건물 관리',
            key: requestCleans.category,
            children:
                <ServiceHistoryList

                />
        },
        {
            label: '사업장 청소',
            key: requestCleans.category,
            children:
                <ServiceHistoryList

                />
        },
    ];

    return (
        <MainLayout footer={true}>
            <Top
                title={'서비스 내역'}
                notShowIcon={true}
            />
            <Tab
                items={TabItems}
            />
        </MainLayout>
    );
};

export default ServiceHistoryPresenter;