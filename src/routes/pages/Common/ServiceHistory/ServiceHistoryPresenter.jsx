import { MainLayout, Tab, Top } from '../../../../components';
import ServiceHistoryList from './Components/ServiceHistoryList';
import './ServiceHistory.css';

const ServiceHistoryPresenter = ({
    isLoading,
    userRequestClean,
}) => {

    if (isLoading) {
        return null;
    };

    const TabItems = [
        {
            label: '전체',
            key: 'all',
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '이사/입주 청소',
            key: 'MOVE',
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '거주/생활 청소',
            key: 'APPLIANCES',
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '가전/가구 청소',
            key: '',
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '건물 관리',
            key: '5',
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '사업장 청소',
            key: '6',
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
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