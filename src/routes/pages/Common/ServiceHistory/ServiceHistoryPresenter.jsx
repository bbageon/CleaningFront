import { MainLayout, Tab, Top } from '../../../../components';
import ServiceHistoryList from './Components/ServiceHistoryList';
import './ServiceHistory.css';

const ServiceHistoryPresenter = ({
    isLoading,

    // Tab
    setTabKey,
    
    userRequestClean,
}) => {

    if (isLoading) {
        return null;
    };

    const TabItems = [
        {
            label: '전체',
            key: 0,
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '이사/입주청소',
            key: 1,
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '거주/생활청소',
            key: 2,
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '가전/가구청소',
            key: 3,
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '사업장청소',
            key: 4,
            children:
                <ServiceHistoryList
                    userRequestClean={userRequestClean}
                />
        },
        {
            label: '건물관리',
            key: 5,
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
                onChange={setTabKey}
            />
        </MainLayout>
    );
};

export default ServiceHistoryPresenter;